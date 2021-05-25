import React from "react";
import './App.css'
import Items from "./componenets/Items";


const App = (props) =>{

  const foodR = Math.floor(Math.random()*20)
  const foodC = Math.floor(Math.random()*20)
 console.log(foodR , foodC)
  const box = () =>{
   let arry = []
   
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if (i === foodR && j === foodC) {
          arry.push(<Items className="food"/>)
        }else{
          arry.push(<Items className="item"/>)
        }
        
      }
    }

   return arry
  }
  
  return(
    <div className="box">
     {box()}
    </div>
  )
  
}
export default App;