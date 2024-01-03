import React, { Component } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMobile,
  FaTwitter,
  FaGooglePlus,
} from "react-icons/fa";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h5> BYAMUNGU Desire</h5>

            <img
              src="./image/art6.png"
              alt="deesire"
              style={{ height: "250px", marginTop: "50px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              {" "}
              I am a Full Stack Developer in Javascript
            </p>
          </Cell>

          <Cell col={6}>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <p>Do you have an offer or project ? Drop a message below</p> <hr />
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <FaMobile /> (+48)795342660
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <FaGooglePlus /> byadiso@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    {" "}
                    <FaInstagram /> bmng_desire{" "}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <FaTwitter /> bmng_desire{" "}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <FaFacebook /> bmng H desire{" "}
                  </ListItemContent>
                </ListItem>
                {/* <div>
                  {" "}
                  <a
                    href="../www.nganatech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.nganatech.com
                  </a>
                </div> */}
              </List>
            </div>
          </Cell>
        </Grid>

        {/* <h1>Contact Page</h1> */}
      </div>
    );
  }
}
export default contact;
