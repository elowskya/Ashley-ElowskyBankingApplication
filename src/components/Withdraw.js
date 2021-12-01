import { useContext } from "react";
import { UserContext } from "../App";
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useFormik } from "formik";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  console.log(ctx);

  const formik = useFormik({
    initialValues: {
      withdrawInput: "",
    },
    validate: (values) => {
      console.log(typeof values.withdrawInput);
      const errors = {
        withdrawInput: ''
      };

      let hasErrors = false;

      if (!Number(values.withdrawInput)) {
        errors.withdrawInput = "Please enter a number";
        hasErrors = true;
      } 
      if (Number(values.withdrawInput) < 0) {
        errors.withdrawInput = "Must be a positive number";
        hasErrors = true;
      } 
      if (Number(values.withdrawInput) === isNaN) {
        errors.withdrawInput = "Please enter a valid number";
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
    alert("Withdraw Received");
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
        <Col xs={12}>
        <Form.Group className="mb-3" controlId="balanceField">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="number" placeholder="Current Balance"
        name="balance"
        value={76}
        disabled='true'
    />
      </Form.Group>
        </Col>

        <Col xs={12} md={4}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="withdrawField">
          <Form.Label>Withdraw Amount</Form.Label>
          <Form.Control type="text" placeholder="Please enter amount to withdraw" 
          name='withdrawInput'
          onChange={formik.handleChange}
          value={formik.values.withdrawInput}
          /> 
          
          {formik.errors.withdrawInput && (
            <p style={{color: 'red'}}> {formik.errors.withdrawInput} </p> 
            )}
            </Form.Group>

        <Button variant="primary" id="submitBtn" type="submit" disabled={!formik.isValid || !formik.values.withdrawInput}>
          Submit
        </Button>
      </Form>
      </Col>

      <Col xs={12} md={4}></Col>
      </Row>
      </Container>
    )
}
