"use client";

import React from "react";
import { useFormik } from "formik";
import Select1 from "./ selectC";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      degree: "",
      pwd: "",
      Cpp: "",
      Java: "",
      Javascript: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null));
      console.log(values);
    },
  });
  return (
    <form
      className="grid justify-items-center"
      action="/action_page.php"
      onSubmit={formik.handleSubmit}
    >
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <div>
        <label htmlFor="degree">Select your degree</label>
        <select
          name="degree"
          id="degree"
          onChange={formik.handleChange}
          value={formik.values.degree}
        >
          <option value="B.tech">B.tech</option>
          <option value="BSc.">BSc.</option>
          <option value="BA">BA</option>
          <option value="BCA">BCA</option>
        </select>
      </div>

      <div>
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          id="pwd"
          name="pwd"
          onChange={formik.handleChange}
          value={formik.values.pwd}
        ></input>
      </div>

      <div>
        <input type="radio" id="Cpp" name="Cpp" onChange={formik.handleChange}
          value={formik.values.Cpp} />
        <label htmlFor="Cpp">Cpp</label>
        <br />
        <input type="radio" id="Java" name="Java"   onChange={formik.handleChange}
          value={formik.values.Java} />
        <label htmlFor="Java">Java</label>
        <br />
        <input
          type="radio"
          id="Javascript"
          name="Javascript"
          onChange={formik.handleChange}
          value={formik.values.Javascript}
        />
        <label htmlFor="Javascript">JavaScript</label>
      </div>

      <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1"> I have a bike</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> I have a car</label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label htmlFor="vehicle3"> I have a boat</label>
        <br></br>
      </div>

      <div>
        <input type="file" id="myFile" name="filename" />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default SignupForm;
