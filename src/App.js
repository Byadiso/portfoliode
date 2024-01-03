import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content, Footer } from "react-mdl";
import Main from "./Components/main";
import FooterComponent from "./Components/footer";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home{" "}
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/projects">Take a look on what I am creating</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/aboutme">About me</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home{" "}
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer size="mini" className="footer-content">
            <FooterComponent />
            {/* <p>Copyright @ change to see it BYAMUNGU Desire 2020, Poznan-Poland</p> */}
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
