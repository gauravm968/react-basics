import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // // console.log(firstName, lastName)
  // function changeFirstHandler(event){
  //   // console.log("First")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value);
  // }
  // function changeLastHandler(event){
  //   // console.log("Last")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value);
  // }

  //// handling multiple states
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", comments: "", isVisible: false, mode: "", favCar: ""});   //<input type... name="firstName"


  // console.log(formData)

  function changeHandler(event){
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value  //[event.target.name] syntax
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  //changing submit button default behavior
  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("Finally printing the entire form data......")
    console.log(formData);
  }
  return (
    <div className="app">
      
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='First Name' onChange={changeHandler} 
      name='firstName' 
      value={formData.firstName}/>
      
      <br/>

      <input type="text" placeholder='Last Name' onChange={changeHandler} 
      name='lastName' 
      value={formData.lastName}/>

      <br/>
      
      <input type="email" placeholder='Enter your email here' onChange={changeHandler} 
      name='email' 
      value={formData.email}/>

      <br/><br/>
      <textarea placeholder='Enter your comments' onChange={changeHandler} name='comments'
      value={formData.comments}
      />

      <br/> <br/>
      <input type='checkbox' onChange={changeHandler}
      name='isVisible'
      checked={formData.isVisible}
      id='check'
      />
      <label htmlFor='check'>Am I visible ?</label>

      <br/><br/>
      {/* <fieldset>
        <legend>Mode:</legend> */}

        <input type='radio' onChange={changeHandler} name='mode' 
      value="Online Mode" 
      id='onlineMode' 
      checked={formData.mode === "Online Mode"} />

      <label htmlFor='onlineMode'>Online Mode</label>

      <input type='radio' onChange={changeHandler} name='mode' 
      value="Offline Mode" 
      id='offlineMode' 
      checked={formData.mode === "Offline Mode"}/>

      <label htmlFor='offlineMode'>Offline Mode</label>
      {/* </fieldset> */}

      <br/> <br/>

      <label htmlFor='fav-car'>Tell me your Favourite Car : </label>
      <select onChange={changeHandler} 
      name='favCar' id='fav-car'
      value={formData.favCar}>
      <option value="Scarpio">Scarpio</option>
      <option value="Fartuner">Fartuner</option>
      <option value="Thar">Thar</option>
      <option value="Legender">Legender</option>
      <option value="Defender">Defender</option>
      </select>

      <br/>
      {/* <input type='submit' value='Submit'></input> */}
      <button >Submit</button>
    </form>

    </div>
  );
}

export default App;

//controlled components -> (maintain state inside component)

//<input value={} />  -> state track (value property)