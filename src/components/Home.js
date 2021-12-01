import { useContext } from "react";
import { UserContext } from "../App";
import homeImg from '../assets/Img/zenHome.webp';
import { Card, Container } from 'react-bootstrap';

export default function Home() {
  const ctx = useContext(UserContext);
  console.log(ctx);
  return (
    <Container>
    
    <Card>
    <Card.Header>
      Welcome to The River Bank
      </Card.Header>
      <Card.Body>
        <Card.Text>
          A peaceful place for all of your banking needs.
        </Card.Text>
      </Card.Body>
    <Card.Img variant="top" src={homeImg} />
  </Card>
  </Container>
  );
}
