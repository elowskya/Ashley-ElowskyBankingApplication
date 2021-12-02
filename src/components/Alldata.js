import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { Table, Card } from 'react-bootstrap';

export default function Alldata() {
  const [users, setUsers] = useContext(UserContext); 
  console.log(users);
  return (
    <Card>
    <Card.Title as="h1">All Data</Card.Title>
    <Card.Body>
    <Table striped bordered hover>
    <thead> 
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    </tr>
    </thead>
    <tbody>
    {users.map(( user, index ) => (
      <tr key={index}>
      <td>{user.firstName} {user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      </tr>
    ))}
    </tbody>
  </Table>
  </Card.Body>
  </Card>
  )
}
