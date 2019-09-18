import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faNodeJs,
  faReact,
  faLinkedin,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faBriefcase,
  faEnvelope,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

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
        <h5>
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1em" }} />{" "}
          Email
        </h5>
        <p>contact@venkateshgopalakrishnan.com</p>
        <h5>
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1em" }} />{" "}
          Linkedin
        </h5>
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/gopalakrishnanvenkatesh/"
        >
          <p>linkedin.com/in/gopalakrishnanvenkatesh</p>
        </a>
        <h5>
          <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: "1em" }} />{" "}
          GitHub
        </h5>
        <a
          style={{ color: "white" }}
          href="https://github.com/venkateshgopalakrishnan/"
        >
          <p>github.com/venkateshgopalakrishnan</p>
        </a>
        <h5>
          <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "1em" }} />{" "}
          Web
        </h5>
        <a
          style={{ color: "white" }}
          href="https://venkateshgopalakrishnan.com/"
        >
          <p>venkateshgopalakrishnan.com</p>
        </a>

        <hr className="horizontalLine" />
      </Col>

      <Col xs lg={8} className="resumeRightCol">
        <h2> Education</h2>
        <Education
          icon={
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ fontSize: "1em" }}
            />
          }
          startYear="2014"
          endYear="2018"
          schoolName="Thiagarajar College of Engineering"
          schoolDescription="Bachelor of Eng. in Electrical and Electronics"
        />
        <hr className="horizontalLine" style={{ width: "100%" }} />
        <h2> Experience</h2>
        <Experience
          icon={
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "1em" }} />
          }
          startYear="Aug 2018"
          endYear="Present"
          jobName="Cognizant Technology Solutions"
          jobDescription="Working as a Full stack Engineer in Banking and Financial Services"
        />
        <Experience
          icon={
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "1em" }} />
          }
          startYear="Jan 2018"
          endYear="June 2018"
          jobName="National University of Singapore"
          jobDescription="Worked as an Undergraduate researcher on Bio-Electrical Signal Analysis"
        />
        <hr className="horizontalLine" style={{ width: "100%" }} />
        <h2>Skills</h2>
        <Skills
          skill="Python"
          icon={
            <FontAwesomeIcon icon={faPython} style={{ fontSize: "1.5em" }} />
          }
          progress={70}
        />
        <br></br>
        <Skills
          skill="Javascript"
          icon={
            <FontAwesomeIcon icon={faJsSquare} style={{ fontSize: "1.5em" }} />
          }
          progress={50}
        />
        <br></br>
        <Skills
          skill="React"
          icon={
            <FontAwesomeIcon icon={faReact} style={{ fontSize: "1.5em" }} />
          }
          progress={60}
        />
        <br></br>
        <Skills
          skill="NodeJS"
          icon={
            <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: "1.5em" }} />
          }
          progress={60}
        />
        <br></br>
        <hr className="horizontalLine" style={{ width: "100%" }} />
      </Col>
    </Row>
  </Container>
);

export default ResumePage;
