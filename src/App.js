import React from "react";
import TopMenu from "./components/TopMenu";
import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
import ProjectsPage from "./components/ProjectsPage";
import NotFoundPage from "./components/NotFoundPage";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <Container className="text-center">
      <TopMenu />
      <br></br>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
};

export default App;
