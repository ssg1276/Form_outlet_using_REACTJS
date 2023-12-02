import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [FormData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: '',
  })
  function changeHandler(event) {
    const { name, type, value, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === checked ? checked : value,
    }))
  }
  function submitHandler(event) {
    event.preventDefault()
    console.log(FormData)
  }
  return (
    <div className="flex flex-col items-center mt-5 w-[100%] ">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={changeHandler}
          value={FormData.firstName}
          className="outline"
          id="firstName"
          name="firstName"
        />
        <br />
        <br />
        <label htmlFor="middleName">Middle Name</label>
        <br />
        <input
          class="mt-1 border "
          type="text"
          placeholder="Enter Middle Name"
          onChange={changeHandler}
          value={FormData.middleName}
          className="outline"
          name="middleName"
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          value={FormData.lastName}
          className="outline"
          name="lastName"
        />
        <br />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          placeholder="Enter Email Address"
          onChange={changeHandler}
          value={FormData.email}
          id="email"
          name="email"
          className="outline"
        />
        <br />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          onChange={changeHandler}
          className="outline"
          value={FormData.country}
        >
          <option>India</option>
          <option>Russia</option>
          <option>USA</option>
          <option>Japan</option>
          <option>China</option>
          <option>Canada</option>
        </select>
        <br />
        <br />
        <label htmlFor="streetaddress">Street Address</label>
        <br />
        <input
          type="text"
          placeholder="Enter Street Address"
          onChange={changeHandler}
          value={FormData.streetAddress}
          id="streetaddress"
          name="streetAddress"
          className="outline"
        />
        <br />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your City"
          onChange={changeHandler}
          value={FormData.city}
          id="city"
          name="city"
          className="outline"
        />
        <br />
        <br />
        <label htmlFor="state">State/Province</label>
        <br />
        <input
          type="text"
          placeholder="Enter Your State"
          onChange={changeHandler}
          value={FormData.state}
          id="state"
          name="state"
          className="outline"
        />
        <br />
        <br />
        <label htmlFor="postalcode">Postal Code</label>
        <br />
        <input
          type="text"
          placeholder="Enter Postal Code"
          onChange={changeHandler}
          value={FormData.postalCode}
          id="postalcode"
          name="postalCode"
          className="outline"
        />
        <br />
        <br />
        <fieldset>
          <legend className="text-black font-bold">By Email</legend>
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>akshduahsd alsdahsdd alsjushan</p>
            </div>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>akshduahsd alsdahsdd alsjushan</p>
            </div>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>akshduahsd alsdahsdd alsjushan</p>
            </div>
          </div>
        </fieldset>
        <br />

        <fieldset>
          <legend className="text-black font-bold">Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <input
            type="radio"
            id="pusheverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pusheverything">Everything</label>
          <br />
          <input
            type="radio"
            id="pushemail"
            name="pushNotifications"
            value="Same As Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushemail">Same As Email</label>
          <br />
          <input
            type="radio"
            id="pushnothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushnothing">No Push Notifications</label>
          <br />
        </fieldset>
        <br />
        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  )

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   middleName: '',
  //   lastName: '',
  //   email: '',
  //   country: '',
  //   comments: '',
  // })
  // function changeHandler(event) {
  //   const { name, value, type, checked } = event.target
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === checked ? checked : value,
  //   }))
  // }
  // return (
  //   <div className="flex flex-col items-center mt-2">
  //     <form>
  //       <label htmlFor="firstName">First Name</label>
  //       <br />
  //       <input
  //         type="text"
  //         placeholder="Enter First Name"
  //         onChange={changeHandler}
  //         value={formData.firstName}
  //         name="firstName"
  //         className="outline"
  //       />
  //       <br />
  //       <label htmlFor="middleName">Middle Name</label>
  //       <br />
  //       <input
  //         type="text"
  //         placeholder="Enter Middle Name"
  //         onChange={changeHandler}
  //         value={formData.middleName}
  //         name="middleName"
  //         className="outline"
  //       />
  //       <br />
  //       <label htmlFor="lastName">Last Name</label>
  //       <br />
  //       <input
  //         type="text"
  //         placeholder="Enter Last Name"
  //         onChange={changeHandler}
  //         value={formData.lastName}
  //         name="lastName"
  //         className="outline"
  //       />
  //       <br />
  //       <label htmlFor="email">E-mail</label>
  //       <br />
  //       <input
  //         type="email"
  //         placeholder="Enter Email"
  //         onChange={changeHandler}
  //         value={formData.email}
  //         name="email"
  //         className="outline"
  //       />
  //       <br />
  //       <label htmlFor="country">Country</label>
  //       <br />
  //       <select
  //         name="country"
  //         id="country"
  //         value={formData.country}
  //         onChange={changeHandler}
  //         className="outline"
  //       >
  //         <option>India</option>
  //         <option>Russia</option>
  //         <option>USA</option>
  //         <option>Japan</option>
  //         <option>China</option>
  //         <option>Canada</option>
  //       </select>
  //       <br />
  //       <fieldset>
  //         <legend>By Email</legend>
  //         <div className="flex flex-row">
  //           <input
  //             type="checkbox"
  //             name="comments"
  //             id="comments"
  //             onChange={changeHandler}
  //           />
  //           <div>
  //             <label htmlFor="comments">Comments</label>
  //             <p>akshduahsd alsdahsdd alsjushan</p>
  //           </div>
  //         </div>
  //       </fieldset>
  //     </form>
  //   </div>
  // )
}

export default App
