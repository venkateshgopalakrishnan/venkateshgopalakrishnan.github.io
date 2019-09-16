import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "../App.css";

const ResumePage = () => (
  <Container className="resume">
    <Row>
      <Col xs lg={4}>
        <div>
          <img
            className="avatarImage"
            src="https://miro.medium.com/max/2400/1*3TXf_aPgXuqoSi4qBRJURA.jpeg"
            alt="Venkatesh Gopalakrishnan"
          />
        </div>
        <h2 style={{ paddingTop: "1em" }}>Venkatesh Gopalakrishnan</h2>
        <h4 style={{ color: "white" }}>Developer</h4>
        <hr className="horizontalLine" />
        <p>
          A passionate and voracious engineer actively seeking job opportunities
          in the areas of Computer Vision, Deep learning and Artificial
          Intelligence
        </p>
        <hr className="horizontalLine" />
        <h5>Phone</h5>
        <p>+(91) 9442715766</p>
        <h5>Email</h5>
        <p>contact@venkateshgopalakrishnan.com</p>
        <h5>Web</h5>
        <p>venkateshgopalakrishnan.com</p>
        <h5>Linkedin</h5>
        <p>linkedin.com/in/gopalakrishnanvenkatesh</p>
        <hr className="horizontalLine" />
      </Col>

      <Col xs lg={8} className="resumeRightCol">
        <h2> Education</h2>
        <Education
          startYear={2014}
          endYear={2018}
          schoolName="Thiagarajar College of Engineering"
          schoolDescription="Bachelor of Eng. in Electrical and Electronics"
        />
        <hr className="horizontalLine" style={{ width: "100%" }} />

        <h2> Experience</h2>
        <Experience
          startYear={2018}
          endYear={"Present"}
          jobName="Cognizant Technology Solutions"
          jobDescription="Working as a Full stack Engineer in Banking and Financial Services"
        />
        <hr className="horizontalLine" style={{ width: "100%" }} />

        <h2>Skills</h2>
        <Skills skill="Javascript" progress={75} />
        <Skills skill="HTML/CSS" progress={75} />
        <Skills skill="NodeJS" progress={60} />
        <Skills skill="React" progress={50} />
      </Col>
    </Row>
  </Container>
);

export default ResumePage;
