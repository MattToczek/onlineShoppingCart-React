import React, {useState} from 'react';
import './App.css';

function App() {

  const [gameConsoles, setConsoles] = useState(
    [
      {
        name: "PS4",
        price: 199,
        yearOfRelease: 2013
      },
      {
        name: "XBox One X",
        price: 299,
        yearOfRelease: 2015
      },
      {
        name: "Switch",
        price: 150,
        yearOfRelease: 2017
      }
    ]
  )

  const [shoppingList, setshoppingList] = useState(
    {
      list: [],
      total: 0
    }
  )

  const addItem = (i) => {
    setshoppingList(
      {
        list: [...shoppingList.list, gameConsoles[i].name],
        total: shoppingList.total + gameConsoles[i].price
      }
    )
    console.log(i);
    
  }

  const addDiscount = ()=> {
    const newArray = [...gameConsoles]
    newArray.map((item)=>{

      if(item.name === "PS4"){
        item.price -=50}
      
    })
    setConsoles( newArray )
    console.log(gameConsoles);
    
  }

  return (
    <div className="App">
      {gameConsoles.map((device, i)=> {
        return (<li key="i">Buy the {device.name} for only {device.price}, released in {device.yearOfRelease} <button onClick = {() => addItem(i)}>Buy Now!</button> </li>)
      })}
      <button onClick = {()=>{addDiscount()}}>Add Discount for PS4!</button>
      <div className = "list">
        {shoppingList.list.map((item)=>{
          return <div>{item}</div>
        })}
      </div>
      <div>
      <h2>Your total is: </h2>
        {shoppingList.total}
      </div>
    </div>
  );
}

export default App;
