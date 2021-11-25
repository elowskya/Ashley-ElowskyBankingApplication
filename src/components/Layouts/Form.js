import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

export default function form() {
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
        <Form>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Col>

      <Col xs={12} md={4}></Col>
      </Row>
      </Container>
    )
}
