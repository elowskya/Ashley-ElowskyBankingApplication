import { useContext } from "react";
import { UserContext } from "../App";

import { Table, Container } from 'react-bootstrap';

export default function Alldata() {
  const ctx = useContext(UserContext);
  const usersMap = ctx.users.map(( user, index ) => (
    <tr key={index}>
    <td>{user.firstName} {user.lastName}</td>
    <td>{user.email}</td>
    <td>{user.password}</td>
    </tr>
  )); 
  
  return (
    <Container>
    <h1>page title</h1>
    <Table striped bordered hover>
    <thead> 
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    </tr>
    </thead>
    <tbody>
    {usersMap}
    </tbody>
  </Table>
  </Container>
  )
}
