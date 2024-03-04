
import { useState } from 'react'
import './App.css'
const Input =()=>{
  
  return <>
  <input type="text"  />
  <button type="submit" >Add</button>
  </>
}
const View =()=>{
  return <>
  </>
}
function App() {
const [inputData,setInputData] = useState([]);
const addDate = (newInput)=>{
  const list = inputData.push(newInput);
  setInputData(list);
}


  return (
    <>
    <Input addDate ={addDate}/>
    <View list = {inputData}/>
    
    </>
  )
}

export default App
