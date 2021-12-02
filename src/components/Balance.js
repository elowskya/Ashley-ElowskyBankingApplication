import { useContext } from "react";
import { Card, Form } from "react-bootstrap";
import { UserContext } from "./UserProvider";

export const balance = 0;

export default function Balance() {
  const [users, setUsers] = useContext(UserContext);
  // setUsers(balance);

  return (
      <Card>
        <Card.Title as="h1">Balance</Card.Title>
        <Card.Body>
        <Form.Group className="mb-3" controlId="balanceField">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="number" placeholder="Current Balance"
        name="balance"
        value={balance}
        disabled='true'
    />
      </Form.Group>
        </Card.Body>
      </Card>
  )
}
