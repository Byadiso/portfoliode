import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Aboutme extends Component {
  render() {
    return (
      <div className="aboutme-body">
        <Grid className="aboutme-grid">
          <Cell className="aboutme-right-col" col={12}>
            <div className="about-list">
              <List>
              <ListItem>
                  <ListItemContent style={{ fontSize: "17px", color: "grey" }}>
                    Full stack  developer with React.js, Node.js, MongoBD  and Python!
                    He is helping Small enterprise develop solutions for their clients.
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "17px", color: "grey" }}>
                    "When not coding he likes playing his guitar,and
                    sometime modelling 3D characters for games using  Blender."
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Aboutme;
