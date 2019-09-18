import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Education = props => (
  <Container>
    <Row>
      <Col xs lg={4}>
        {props.icon}
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Col>
      <Col xs lg={8}>
        <h5 style={{ marginTop: "0px" }}>{props.schoolName}</h5>
        <p>{props.schoolDescription}</p>
      </Col>
    </Row>
  </Container>
);

export default Education;
