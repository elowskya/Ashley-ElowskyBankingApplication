import { useContext } from "react";
import UserProvider from "./UserProvider";
import { Form, Button, Card } from 'react-bootstrap';
import { useFormik } from "formik";

export default function Withdraw() {
  const ctx = useContext(UserProvider);
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
        <Card>
            <Card.Title as="h1">Withdraw</Card.Title>
        <Card.Body>
        <Form.Group className="mb-3" controlId="balanceField">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="number" placeholder="Current Balance"
        name="balance"
        value={445}
        disabled='true'
    />
      </Form.Group>

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
      
      </Card.Body>
      </Card>
    )
}
