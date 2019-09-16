import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div>
      <img
        className="avatarImage"
        src="https://miro.medium.com/max/2400/1*3TXf_aPgXuqoSi4qBRJURA.jpeg"
        alt="Venkatesh Gopalakrishnan"
      />
      <br />
      <br />
      <div className="greyBackground">
        <h1>Developer</h1>
        <hr
          style={{
            borderTop: "5px dotted",
            width: "50%"
          }}
        />
        <h4>Python | JavaScript | MongoDB | Express | React | NodeJS</h4>
        <br />
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Button variant="secondary" size="lg"> */}
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/gopalakrishnanvenkatesh/"
          >
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
          {/* </Button> */} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Button variant="secondary" size="lg"> */}
          <a
            style={{ color: "white" }}
            href="https://github.com/venkateshgopalakrishnan"
          >
            <FontAwesomeIcon icon={faGithubSquare} size="4x" />
          </a>
          {/* </Button>&nbsp;&nbsp;&nbsp;&nbsp; */}{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomePage;
