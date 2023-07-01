import { useState } from 'react'
import './App.css'

function App() {
  //State hook - useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  //Helper function
  function addItem() {

    if (!newItem) {
      alert('Enter the item.')
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }


    setItems(oldList => [...oldList, item]);

    setNewItem("");

    console.log(items)
  }

  function deleteItem(id) {
    const newArray = items.filter(item =>  item.id !== id);
    setItems(newArray);
  }

  return (
    <>
    {/* 1.Header */}
    <h1 className='mb-4'>Todo List App</h1>

    {/* 2.Input (input and button) */}
    <input type="text"
    placeholder='Add an item...'
    className='py-[0.6em] px-[1.2em] rounded-[8px_0px_0px_8px] mb-4'
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
    />

    <button className='rounded-[0px_8px_8px_0px]' onClick={addItem}>Add</button>

    {/* 3.List of items (unordered list with list items) */}
    <ul>
      {items.map(item => {
        return(
          <li key={item.id}>{item.value} <button onClick={()=> deleteItem(item.id)}>X</button> </li>
        )
      })}
    </ul>
    </>
  )
}

export default App
