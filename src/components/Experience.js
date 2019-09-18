import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Experience = props => (
  <Container>
    <Row>
      <Col xs lg={4}>
        {props.icon}
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Col>
      <Col xs lg={8}>
        <h5 style={{ marginTop: "0px" }}>{props.jobName}</h5>
        <p>{props.jobDescription}</p>
      </Col>
    </Row>
  </Container>
);

export default Experience;
