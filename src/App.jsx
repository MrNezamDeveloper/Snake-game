import React, { Component } from "react";
import './App.css'
import Items from "./componenets/Items";



export default class App extends Component{
// create random food for snake
constructor(props){
  super(props)
 this.state = {
  food : this.getRandomCell()
  }
}

getRandomCell = () => {
  return{
    column : Math.floor(Math.random() *20),
    row : Math.floor(Math.random() *20),
  }
}



box = () =>{
  let arry = []
  // create table 20*20 row and colemn
   for (let i = 0; i < 20; i++) {
     for (let j = 0; j < 20; j++) {
       // create food as random method
       if (i === this.state.food.row && j === this.state.food.column) {
         // send props to items as class name 
         arry.push(<Items className="food"/>)
       }else{
         arry.push(<Items className="item"/>)
       }
     }
   }

  return arry
 }
render(){
 
return(
  <div className="box">
    {this.box()}
  </div>
  )
}
}