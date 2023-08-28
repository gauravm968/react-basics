import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value   //[name]:value -> [event.target.name]: event.target.value
    }))
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finally printing the value of form data: ")
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">

      <form onSubmit={submitHandler}>
        <label htmlFor="first-Name">First name</label> <br />
        <input type="text" placeholder="Gaurav" id="first-Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
          className="border" />

        <br />

        <label htmlFor="last-Name">Last name</label> <br />
        <input type="text" placeholder="Mahor" id="last-Name"
          onChange={changeHandler}
          name="lastName"
          checked={formData.lastName}
          className="border" 
        />
        <br />

        <label htmlFor="email">Email Address</label> <br />
        <input type="email" placeholder="gaurav@abcd.com" id="email"
          onChange={changeHandler}
          name="email"
          checked={formData.email}
          className="border" />

        <br />

        <label htmlFor="country">Country</label> <br />
        <select id="country" name="country" checked={formData.country} onChange={changeHandler} className="border">
          <option>India</option>
          <option>United states</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />

        <label htmlFor="street-Address">Street Address</label> <br />
        <input type="text" placeholder="B-25C" id="street-Address"
          onChange={changeHandler}
          name="streetAddress"
          value={formData.streetAddress}
          className="border" />

        <br />

        <label htmlFor="city">City</label> <br />
        <input type="text" placeholder="Indore" id="city"
          onChange={changeHandler}
          name="city"
          value={formData.city}
          className="border" />

        <br />

        <label htmlFor="state">State / Province</label> <br />
        <input type="text" placeholder="Madhya Pradesh" id="state"
          onChange={changeHandler}
          name="state"
          value={formData.state}
          className="border" />

        <br />

        <label htmlFor="postal-Code">ZIP / Postal Code</label> <br />
        <input type="text" placeholder="110077" id="postal-Code"
          onChange={changeHandler}
          name="postalCode"
          value={formData.postalCode}
          className="border" />

        <br /><br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input type="checkbox" id="comments" name="comments"
              value={formData.comments} onChange={changeHandler} />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input type="checkbox" id="candidates" name="candidates"
              value={formData.candidates} onChange={changeHandler} />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input type="checkbox" id="offers" name="offers"
              value={formData.offers} onChange={changeHandler} />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <br /><br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input type="radio" id="pushEverything"
            name="pushNotification" value="Everything"
            onChange={changeHandler} />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input type="radio" id="pushEmail"
            name="pushNotification" value="Same as email"
            onChange={changeHandler} />
          <label htmlFor="pushEmail">Same as email</label>
          <br />
          <input type="radio" id="pushNothing"
            name="pushNotification" value="No push notifications"
            onChange={changeHandler} />
          <label htmlFor="pushNothing">No push notifications</label>
        </fieldset>

<button className="bg-blue-500 text-white font-bold rounded py-1 px-5">Save</button>
      </form>

    </div>
  );
}

export default App;
