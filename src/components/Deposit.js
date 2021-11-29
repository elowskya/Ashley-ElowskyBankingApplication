import { useContext } from "react";
import { UserContext } from "../App";

import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { Formik, useFormik } from "formik";

export default function Deposit() {
  const ctx = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      depositInput: "",
    },
    validate: (values) => {
      const errors = {
        depositInput: ''
      };

      let hasErrors = false;

      if (!values.depositInput) {
        errors.depositInput = "Please enter a number";
        hasErrors = true;
      } 
      if (values.depositInput < 0) {
        errors.depositInput = "Must be a positive number";
        hasErrors = true;
      } 
      if (values.depositInput === isNaN) {
        errors.depositInput = "Please enter a valid number";
        hasErrors = true;
      } 
      if (!hasErrors) {
        return; 
      } else {
        return errors;
     }},
    validateOnChange: true,
  })
  
  const handleSubmit = () => {
    alert("Deposit Received");
    const user = {
      ...formik.values
    // formik.values.firstName
    // formik.values.lastName
    // formik.values.email
    // formik.values.password
    }
    formik.resetForm();
  };
    return (
        <Container>
        <Row>
            <Col>
                <h1>page title</h1>
            </Col>
        </Row>

        <Row>
        <Col xs={12} md={4}></Col>

        <Col xs={12} md={4}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="depositField">
          <Form.Label>Deposit Amount</Form.Label>
          <Form.Control type="number" placeholder="Please enter amount to deposit" 
          name='deposit'
          onChange={formik.handleChange}
          value={formik.values.deposit}
          /> 
          
          {formik.errors.deposit && (
            <p style={{color: 'red'}}> {formik.errors.deposit} </p> 
            )}
            </Form.Group>

        <Form.Group className="mb-3" controlId="balanceField">
          <Form.Label>Balance</Form.Label>
          <Form.Control type="number" placeholder="Current Balance"
          name="balance"
          onChange={formik.handleChange}
          value={formik.values.balance}
      />
      {formik.errors.balance && (
        <p style={{color: 'red'}}> {formik.errors.balance} </p> 
        )}
        </Form.Group>

        <Button variant="primary" id="submitBtn" type="submit" disabled={!formik.isValid}>
          Submit
        </Button>
      </Form>
      </Col>

      <Col xs={12} md={4}></Col>
      </Row>
      </Container>
    )
}
