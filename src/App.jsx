import React, { useState } from "react";
import './App.css'
import Items from "./componenets/Items";


const App = () =>{
// create random food for snake

 const [FoodR, setFoodR] = useState(Math.floor(Math.random()*20))
 const [FoodC, setFoodC] = useState(Math.floor(Math.random()*20))

  const box = () =>{
   let arry = []
   // create table 20*20 row and colemn
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        // create food as random method
        if (i === FoodR && j === FoodC) {
          // send props to items as class name 
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