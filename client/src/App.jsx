import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

const sendData = async () => {
  try{
    const payload ={species: "Smallmouth Bass", length: "10.25 in", kept: false, released: true};
    const response = await axios .post("http://localhost:8080/api", payload);
    console.log("Response", response.data);
  }
  catch{
    console.error("Error sending data:", error);
  }
}
return(
  <div>
    <h1>Send Data test</h1>
    <button onClick={sendData}>send to backend</button>
  </div>
)

}

export default App
