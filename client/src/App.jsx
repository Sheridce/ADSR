import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [message, setMessage] = useState("")

const sendData = async() => {
  try{ 
  await axios.post("http://localhost:8080/api", {
    angler: {
      email_addr: "realemail123@example.com",
      name_first: "real",
      name_last: "nameson"
    },
    trip: {
      trip_date: "2001-04-28",
      area_fished: "idk",
      bait_type: "master",
      fishing_type: "fake",
      target_trout: true,
      trout_time: "1 hour",
      target_bass: false,
      bass_time: "0 hours",
      target_pike: false,
      pike_time: "0 hours",
      target_yp: false,
      yp_time: "0 hours",
      target_wp: false,
      wp_time: "0 hours",
      target_sunfish: true,
      sunfish_time: "2 hours",
      target_bullhead: true,
      bullhead_time: "6 hours",
     no_fish: false,
      personal_notes: "true and real and factual"
    },
    fish: [
      {species: "Trout", length: "13.5 in", kept: true, released: false},
      {species: "Sunfish", length: "10.25 in", kept: false, released: true},
      {species: "Bullhead", length: "16 in", kept: false, released: true}
    ]
  })
}
catch (err){
  console.error("Error sending data:", err);
}
};

return (
  <div>
    <label>
      Email address: <input type="text" />
    </label>
    <label>
      First name: (optional) <input type="text" />
    </label>
    <label>
      Last name (optional): <input type="text" />
    </label>
    <br />
    <label> 
      Trip date: <input type="text" />
    </label>
    <label >
      Area fished:
      <select name="areaFished">
        <option value="North Basin">North Basin</option>
        <option value="Narrows">Narrows</option>
        <option value="South Basin">South Basin</option>
      </select>
    </label>
    <label>
      Bait type:
      <select name="baitType">
        <option value="Artificial">Artificial</option>
        <option value="Natural">Natural</option>
      </select>
    </label>
    <label>
      Fishing type:
      <select name="fishingType">
        <option value="Boat">Boat</option>
        <option value="Short">Shore</option>
        <option value="Ice">Ice</option>
      </select>
    </label>
    <label>
      Time spent fishing: <input type="text"/>
    </label>
    <br />
    <label>Target Species | </label>
    <label>Time spent targeting (nearest 1/4th hour) | </label>
    <label>Target Species | </label>
    <label>Time spent targeting (nearest 1/4th hour)</label>
    <br />
    <label>
      Lake Trout 
      <input type= "checkbox" />
    </label>
    <label>
      <input type="text"/>
    </label>
    <label>
      Yellow Perch
      <input type= "checkbox" />
    </label>
    <label>
      <input type="text"/>
    </label>
    <br /><label>
      Bass 
      <input type= "checkbox" />
    </label>
    <label>
      <input type="text"/>
    </label>
    <label>
      White Perch 
      <input type= "checkbox" />
    </label>
    <label>
      <input type="text"/>
    </label>
    <br />
    <label>
      Northern Pike
      <input type= "checkbox" />
    </label>
    <label>
      <input type="text"/>
    </label>
    <label>
      Sunfish 
      <input type= "checkbox" />
    </label>
    <label>
      <input type="text"/>
    </label>
    <br />
    <label>
      Bullhead
      <input type= "checkbox" />
    </label>
    <label>
      <input type="text"/>
    </label>
    <br />
    <label> No fish caught <input type="checkbox"/></label> 
    <h1>Send Data Test</h1>
    <button onClick={sendData}>Send to Backend</button>
    <p>{message}</p>
  </div>
);
}

export default App;
