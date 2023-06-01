import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container className="p-4">
      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <div className="d-flex flex-column justify-content-center">
            <Card className="text-center mx-auto card-shadow ">
              <Card.Header>Dashboard</Card.Header>
              <Card.Body>
                <Card.Title className=" mx-auto">My Profile</Card.Title>
                <Card.Text>Hello, my name is {user?.name}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{user?.email}</Card.Footer>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
