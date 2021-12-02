import React from 'react';
import { useContext } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { UserContext } from "./UserProvider";
import { useFormik } from "formik";

export default function CreateAccount() {
  const [users, setUsers] = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      };

      let hasErrors = false;

      if (!values.firstName) {
        errors.firstName = "Field required";
        hasErrors = true;
      } 
      if (!values.lastName) {
        errors.lastName = "Field required";
        hasErrors = true;
      } 
      if (!values.email) {
        errors.email = "Field required";
        hasErrors = true;
      } 
      if (!values.password) {
        errors.password = "Field required";
        hasErrors = true;
      } 
      
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Please use a valid email";
        hasErrors = true;
      }
      if (!hasErrors) {
        return; 
      } else {
        return errors;
     }},
    validateOnChange: true,
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
    
    const user = {
      ...formik.values,
      // formik.values.firstName
      // formik.values.lastName
      // formik.values.email
      // formik.values.password
    }
    setUsers(users.concat(user));
    formik.resetForm();
  };
  console.log(users);
    return (
        <Card>
            <Card.Title as="h1">Create Account</Card.Title>
        <Card.Body>
        <Row>
        <Col xs={12} md={4}></Col>

        <Col xs={12} md={4}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstNameField">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" 
          name='firstName'
          onChange={formik.handleChange}
          value={formik.values.firstName}
          /> 
          
          {formik.errors.firstName && (
            <p style={{color: 'red'}}> {formik.errors.firstName} </p> 
            )}
            </Form.Group>

        <Form.Group className="mb-3" controlId="lastNameField">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
      />
      {formik.errors.lastName && (
        <p style={{color: 'red'}}> {formik.errors.lastName} </p> 
        )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="emailField">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          />
          {formik.errors.email && (
        <p style={{color: 'red'}}> {formik.errors.email} </p> 
        )}
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="passwordField">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          isValid={formik.touched.password && formik.errors.password}
            />
        {formik.errors.password && (
          <p style={{color: 'red'}}> {formik.errors.password} </p> 
          )}
        </Form.Group>

        <Button variant="primary" id="submitBtn" type="submit" disabled={!formik.isValid}>
          Create Account
        </Button>
      </Form>
      </Col>

      <Col xs={12} md={4}></Col>
      </Row>
      </Card.Body>
      </Card>
    )
}
