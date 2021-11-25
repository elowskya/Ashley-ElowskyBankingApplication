/*eslint-disable no-undef*/

import { useContext } from "react";
import { UserContext } from "../App";

import { useFormik } from "formik";


export default function CreateAccount() {
  const ctx = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      firstNameError.innerHTML = "";
      lastNameError.innerHTML = "";
      emailError.innerHTML = "";
      pswError.innerHTML = "";

      if (!values.firstName) {
        firstNameError.innerHTML = "Field required";
      }
      if (!values.lastName) {
        lastNameError.innerHTML = "Field required";
      }
      if (!values.email) {
        emailError.innerHTML = "Field required";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        emailError.innerHTML = "Please use a valid email";
      }
      if (!values.password) {
        pswError.innerHTML = "Field required";
      } else {
        alert("Login Successful");
        // Reset to `initialValues`
        formik.resetForm();
        firstNameError.innerHTML = "";
        lastNameError.innerHTML = "";
        emailError.innerHTML = "";
        pswError.innerHTML = "";
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="firstName">First Name</label>
    <input
      id="firstNameField"
      name="firstName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.firstName}
    />
    <div id="firstNameError"></div>
    <label htmlFor="lastName">Last Name</label>
    <input
      id="lastNameField"
      name="lastName"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.lastName}
    />
    
    <div id="lastNameError"></div>
      <label htmlFor="email">Email Address</label>
      <input
        id="emailField"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div id="emailError"></div>

      <label htmlFor="password">Password</label>
      <input
        id="pswField"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <div id="pswError"></div>

      <button id="submitBtn" type="submit">
        Create Account
      </button>
    </form>
  );
}
