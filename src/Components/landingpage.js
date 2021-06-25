import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class landingpage extends Component{
    render(){
        return(
            <div style= {{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
              
                  <Cell col={12}>
                  <img  
                    src="./image/art.jpg "
                    alt="my resume"
                    className="art-img" />
                    <div className="banner-text"> 
                       <h1> Graphic Designer</h1>
                    
                    <hr/>
                          <p> Photoshop | Illustrator | Blender | Premiere Pro | InDesign </p>
                    </div>
                    
                    

                  </Cell>

              </Grid>
               
            </div>
        )
    }
}
export default landingpage;