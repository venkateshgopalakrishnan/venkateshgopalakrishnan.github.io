import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <br></br>
      <h2>Page Not Found</h2>
      <Link to="/" className="button">
        <Button variant="light">
          <span>Back to Home</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
