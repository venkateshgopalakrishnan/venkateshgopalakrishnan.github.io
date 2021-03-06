import React, { Component } from "react";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";

class Skills extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs lg={2}>
            <div style={{ display: "flex" }}>
              {this.props.icon}&nbsp;
              {this.props.skill}
            </div>
          </Col>
          <Col xs lg={10}>
            <ProgressBar
              variant="danger"
              style={{
                margin: "0.8em",
                width: "100%",
                height: "5px",
                max: "100"
              }}
              animated
              now={this.props.progress}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills;
