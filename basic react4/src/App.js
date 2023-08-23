import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [text, setText] = useState('')
  const [name, setName] = useState('Gaurav')

  ////Variation 1 -> execute on Every Render (of App.js component)
  // useEffect( () => {       
  //   console.log("UI Rendering Done")  
  // })

  ////Variation 2 -> execute on First Render (of App.js component) 
  // useEffect( ()=>{
  //   console.log("UI Rendering Done")
  // }, [])           //useEffect 2nd parameter represents Dependency list

  ////Variation 3 -> execute on First Render + whenever dependency changes ([text] value changes)
  // useEffect( () => {
  //   console.log("Change observed")
  // }, [text])      //for [name] first time   //[text, name]

  ////Variation 4 -> to handle unmounting of a component
  useEffect( () => {
    //add event listener 
    console.log("Listener added")      //2nd

    return () => {     //mostly use for cleaning      //1st execute return code then 2nd (all other code)     
      console.log("Listener removed")      
    }
  },[text])

  function changeHandler(event){
    console.log(text)
    setText(event.target.value)
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
} 
//useEffect hook
// ex. wanna change dom, add new element, remove old element, add/remove any listener, title change, http request, api call

//component mounted -> component rendered on dom
//component unmouted -> component removed from dom
export default App;
