import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI= async () => {
    const response = await axios.get("http://localhost:8080/api")
    setArray(response.data.fruits)
    console.log(response.data.fruits) 
  };

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <>
      <div className="card">
        {
          array.map((fruit, index) =>(
            <div key={index}>
              <p>
                {fruit}
              </p>
              <br />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
