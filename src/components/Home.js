import { useContext } from "react";
import UserProvider from "./UserProvider";
import homeImg from '../assets/Img/zenHome.webp';
import Card from 'react-bootstrap/Card';

export default function Home() {
  const ctx = useContext(UserProvider);
  console.log(ctx);
  return (
    <Card>
    <Card.Header>Welcome to The River Bank</Card.Header>
      <Card.Body>
        <Card.Text>
          A peaceful place for all of your banking needs.
        </Card.Text>
        <Card.Img src={homeImg} />
      </Card.Body>
  </Card>
  );
}
