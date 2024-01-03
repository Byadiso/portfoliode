import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="./image/desire.jpg "
              alt="profile pictur"
              className="art-img"
            />
            <div className="banner-text">
              <h1> Full-Stack Developper</h1>

              <hr />
              <p>
                {" "}
                HTML | CSS | Javascript | React | Node.js | MongoDB | WordPress
                | Python{" "}
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default landingpage;
