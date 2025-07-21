import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [email_addr, setEmail] = useState("");
  const [name_first, setName_first] = useState("");
  const [name_last, setName_last] = useState("");
  const [trip_date, setTrip_date] = useState("");
  const [area_fished, setArea_fished] = useState("North Basin");
  const [bait_type, setBait_type] = useState("Artificial");
  const [fishing_type, setFishing_type] = useState("Boat");
  const [time_fishing, setTime_fishing] = useState(0);
  const [target_trout, setTarget_trout] = useState(false);
  const [trout_time, setTrout_time] = useState(0);
  const [target_bass, setTarget_bass] = useState(false);
  const [bass_time, setBass_time] = useState(0);
  const [target_pike, setTarget_pike] = useState(false);
  const [pike_time, setPike_time] = useState(0);
  const [target_yp, setTarget_yp] = useState(false);
  const [yp_time, setYp_time] = useState(0);
  const [target_wp, setTarget_wp] = useState(false);
  const [wp_time, setWp_time] = useState(0);
  const [target_sunfish, setTarget_sunfish] = useState(false);
  const [sunfish_time, setSunfish_time] = useState(0);
  const [target_bullhead, setTarget_bullhead] = useState(false);
  const [bullhead_time, setBullhead_time] = useState(0);
  const [no_fish, setNo_fish] = useState(false);
  const [fishList, setFishList] = useState([
    {species: "Lake Trout", length: 0, kept: false, released: false}
  ]);
  const addFish = () => {
    setFishList([...fishList, { species: "Lake Trout", length: 0, kept: false, released: false}]);
  };
  const deleteFish = (index) => {
    const updatedFish = [...fishList];
    updatedFish.splice(index, 1);
    setFishList(updatedFish);
  };
  const updateFish = (index, field, value) =>{
    const updatedFish = [...fishList];
    updatedFish[index][field] = value;
    setFishList(updatedFish);
  };
  const [personal_notes, setPersonal_notes] = useState("");



const sendData = async() => {
  try{ 
  await axios.post("http://localhost:8080/api", {
    angler: {
      email_addr: email_addr,
      name_first: name_first,
      name_last: name_last
    },
    trip: {
      trip_date: trip_date,
      area_fished: area_fished,
      bait_type: bait_type,
      fishing_type: fishing_type,
      time_fishing: time_fishing,
      target_trout: target_trout,
      trout_time: trout_time,
      target_bass: target_bass,
      bass_time: bass_time,
      target_pike: target_pike,
      pike_time: pike_time,
      target_yp: target_yp,
      yp_time: yp_time,
      target_wp: target_wp,
      wp_time: wp_time,
      target_sunfish: target_sunfish,
      sunfish_time: sunfish_time,
      target_bullhead: target_bullhead,
      bullhead_time: bullhead_time,
      no_fish: no_fish,
      personal_notes: personal_notes
    },
    fish: fishList
  })
}
catch (err){
  console.error("Error sending data:", err);
}
};

return (
  <div>
    <label>
      Email address: <input type="text" value={email_addr} onChange={e => setEmail(e.target.value)}/>
    </label>
    <label>
      First name: (optional) <input type="text" value={name_first} onChange={e =>setName_first(e.target.value)}/>
    </label>
    <label>
      Last name (optional): <input type="text" value={name_last} onChange={e =>setName_last(e.target.value)}/>
    </label>
    <br />
    <label> 
      Trip date: <input type="date" value={trip_date} onChange={e => setTrip_date(e.target.value)}/>
    </label>
    <label >
      Area fished:
      <select name="areaFished" value={area_fished} onChange={e=> setArea_fished(e.target.value)}>
        <option value="North Basin">North Basin</option>
        <option value="Narrows">Narrows</option>
        <option value="South Basin">South Basin</option>
      </select>
    </label>
    <label>
      Bait type:
      <select name="baitType" value={bait_type} onChange={e => setBait_type(e.target.value)}>
        <option value="Artificial">Artificial</option>
        <option value="Natural">Natural</option>
      </select>
    </label>
    <label>
      Fishing type:
      <select name="fishingType" value={fishing_type} onChange={e => setFishing_type(e.target.value)}>
        <option value="Boat">Boat</option>
        <option value="Short">Shore</option>
        <option value="Ice">Ice</option>
      </select>
    </label>
    <label>
      Time spent fishing: <input type="number" min="0" step="0.25" value={time_fishing} onChange={e => setTime_fishing(e.target.value)}/>
    </label>
    <br />
    <label>Target Species | </label>
    <label>Time spent targeting (nearest 1/4th hour) | </label>
    <label>Target Species | </label>
    <label>Time spent targeting (nearest 1/4th hour)</label>
    <br />
    <label>
      Lake Trout 
      <input type= "checkbox" checked={target_trout} onChange={e => setTarget_trout(e.target.checked)}/>
    </label>
    <label>
      <input type="number" min="0" step="0.25" value={trout_time} onChange={e => setTrout_time(e.target.value)}/>
    </label>
    <label>
      Yellow Perch
      <input type= "checkbox" checked={target_yp} onChange={e => setTarget_yp(e.target.checked)} />
    </label>
    <label>
    <input type="number" min="0" step="0.25" value={yp_time} onChange={e => setYp_time(e.target.value)}/>
    </label>
    <br /><label>
      Bass 
      <input type= "checkbox" checked={target_bass} onChange={e => setTarget_bass(e.target.checked)}/>
    </label>
    <label>
    <input type="number" min="0" step="0.25" value={bass_time} onChange={e => setBass_time(e.target.value)}/>
    </label>
    <label>
      White Perch 
      <input type= "checkbox" checked={target_wp} onChange={e => setTarget_wp(e.target.checked)} />
    </label>
    <label>
    <input type="number" min="0" step="0.25" value={wp_time} onChange={e => setWp_time(e.target.value)}/>
    </label>
    <br />
    <label>
      Northern Pike
      <input type= "checkbox" checked={target_pike} onChange={e => setTarget_pike(e.target.checked)}/>
    </label>
    <label>
    <input type="number" min="0" step="0.25" value={pike_time} onChange={e => setPike_time(e.target.value)}/>
    </label>
    <label>
      Sunfish 
      <input type= "checkbox" checked={target_sunfish} onChange={e => setTarget_sunfish(e.target.checked)}/>
    </label>
    <label>
    <input type="number" min="0" step="0.25" value={sunfish_time} onChange={e => setSunfish_time(e.target.value)}/>
    </label>
    <br />
    <label>
      Bullhead
      <input type= "checkbox" checked={target_bullhead} onChange={e => setTarget_bullhead(e.target.checked)}/>
    </label>
    <label>
    <input type="number" min="0" step="0.25" value={bullhead_time} onChange={e => setBullhead_time(e.target.value)}/>
    </label>
    <br />
    <label> No fish caught <input type="checkbox" checked={no_fish} onChange={e => setNo_fish(e.target.checked)}/></label> 
    <br />
    <h2>Fish caught</h2>
    {fishList.map ((fish, index) => (
      <div key = "index">
        <label>
        Species: 
        <select value={fish.species} onChange={e => updateFish(index, "species", e.target.value)}>
          <option value="Lake Trout">Lake Trout</option>
          <option value="Smallmouth Bass">Smallmouth Bass</option>
          <option value="Largemouth Bass">Largemouth Bass</option>
          <option value="Northern Pike">Northern Pike</option>
          <option value="Yellow Perch">Yellow Perch</option>
          <option value="White Perch">White Perch</option>
          <option value="Sunfish">Sunfish</option>
          <option value="Bullhead">Bullhead</option>
        </select>
      </label>
      <label>
        Length: 
        <input type="number" min = "0" step="0.25" value={fish.length} onChange={(e => updateFish(index, "length", e.target.value))}/>
      </label>
      <label>
        Kept?
        <input type="checkbox" checked={fish.kept} onChange={e => updateFish(index, "kept", e.target.checked)}/>
      </label>
      <label>
        Released?
        <input type="checkbox" checked={fish.released} onChange={e => updateFish(index, "released", e.target.checked)}/>
      </label>
      <button onClick={() => deleteFish(index)} style={{marginLeft: "10px"}}>Remove</button>
      </div>
    ))}
    <button onClick={addFish}>Add another fish</button>
    <br />
    <label>
      Personal notes (optional)
      <input type="text" value={personal_notes} onChange={e => setPersonal_notes(e.target.value)} />
    </label>
    <h1>Send Data Test</h1>
    <button onClick={sendData}>Send to Backend</button>
    <p>{message}</p>
  </div>
);
}

export default App;
