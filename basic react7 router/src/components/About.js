import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/support")
  }

  function backHandler(){
    navigate(-1);        //for the back button
  }

  return (
    <div>
      <div>
     This is About page
    </div>

    <button onClick={clickHandler}>Move to Support page</button>
    
    <button onClick={backHandler}>Move Back</button>

    </div>
  )
}
