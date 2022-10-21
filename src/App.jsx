import './App.css';
import {useState,useEffect} from "react";

// functions

import { getTest } from "./functions/test";



function App() {
  const [data,setData] = useState("Welcome to React");

useEffect(()=>{
getTest()
.then((res)=>{
  setData(res.message);
})
.catch((err)=>console.log(err));
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <center>
        <h1>{data}</h1>
        </center>
        
      </header>
    </div>
  );
}

export default App;
