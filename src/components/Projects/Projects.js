import React, { Component } from "react";
import "./Projects.css";
import Arrow_backward from "../../image/arrow-backward.png";
import { NavLink, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CharityProject from "./CharityProject";
import SidebarProfile from "../SideBar-Profile/SideBarProfile";

class Projects extends React.Component {
  super() {
    this.state = { isProjectsOpen: true };
  }

  closeProjects = () => {
    this.setState = { isProjectsOpen: false };
  };

  createProjects = () => {
    const n = 5;
    let projects = [];
    projects.length = n;
    let i, j;

    for (i = 1; i < 3; i++) {
      for (j = 1; j < 4; j++) {
        projects.push(<div style={{ gridColumn: i, gridRow: j }}>One</div>);
      }
    }

    return projects;
  };

  render() {
    return (
      // <div>
      //   <h3>The project page</h3>
      //   <p>Content here</p>
      // </div>
      <Router>
        <div className="content">
          <div className="page" style={{ display: "block" }}>
            <div className="header__wrapper">
              <div className="header-menu-mobile">
                {/* <NavLink to={"/"}> */}
                <a href="/">
                  <img src={Arrow_backward} alt="Backward Arrow" />
                </a>
                {/* </NavLink> */}
              </div>
              <div className="header-title">My Charity Projects</div>
            </div>
          </div>

          <div className="grid-wrapper">
            {/* {this.createProjects()} */}

            <div className="one">
              <NavLink
                to={"/Projects/CharityProject"}
                className="NavLink"
                // onClick={this.closeProjects}
              >
                Project One
              </NavLink>
            </div>

            <div className="two">
              <NavLink to={"/Projects/CharityProject"} className="NavLink">
                Project Two
              </NavLink>
            </div>
            <div className="three">
              <NavLink to={"/Projects/CharityProject"} className="NavLink">
                Project Three
              </NavLink>
            </div>

            <div className="newProject">
              <NavLink
                to={"/Projects/CharityProject"}
                className="NavLink"
                onClick={() => this.closeProjects()}
              >
                Add New Project
              </NavLink>
            </div>
          </div>
        </div>
        {/* <SidebarProfile /> */}

        {/* <Route path="/" exact component={Homepage} /> */}
        <Route
          path="/Projects/CharityProject"
          exact
          component={CharityProject}
        />
        {/* <Route
          path="/Projects/CharityProject"
          exact
          strict
          render={() =>
            this.state.closeProjects ? <CharityProject /> : <Redirect to="/" />
          }
        /> */}
      </Router>
    );
  }
}
export default Projects;
