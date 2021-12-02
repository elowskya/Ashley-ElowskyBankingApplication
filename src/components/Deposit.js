import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { Form, Button, Card } from 'react-bootstrap';
import Balance, { balance } from './Balance';
import { useFormik } from "formik";

export default function Deposit() {
  const [users, setUsers] = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      depositInput: "",
    },
    validate: (values) => {
      console.log(typeof values.depositInput);
      const errors = {
        depositInput: ''
      };

      let hasErrors = false;

      if (!Number(values.depositInput)) {
        errors.depositInput = "Please enter a number";
        hasErrors = true;
      } 
      if (Number(values.depositInput) < 0) {
        errors.depositInput = "Must be a positive number";
        hasErrors = true;
      } 
      if (Number(values.depositInput) === isNaN) {
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Deposit Received");

    const userDeposit = formik.values.depositInput;
    console.log(userDeposit);
    setUsers(userDeposit + balance);
    formik.resetForm();
  };
    return (
      <>
      <Balance />
        <Card>
            <Card.Title as="h1">Deposit</Card.Title>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="depositField">
          <Form.Label>Deposit Amount</Form.Label>
          <Form.Control type="text" placeholder="Please enter amount to deposit" 
          name='depositInput'
          onChange={formik.handleChange}
          value={formik.values.depositInput}
          /> 
          
          {formik.errors.depositInput && (
            <p style={{color: 'red'}}> {formik.errors.depositInput} </p> 
            )}
            </Form.Group>

        <Button variant="primary" id="submitBtn" type="submit" disabled={!formik.isValid || !formik.values.depositInput}>
          Submit
        </Button>
      </Form>
      </Card.Body>
      </Card>
      </>
    )
}
