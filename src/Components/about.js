import React, { Component } from 'react';
import {Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl';

class Aboutme extends Component{
    render(){
        return(
        <div className='aboutme-body'>
             <Grid className='aboutme-grid'>
                <Cell col={6}> 
                     {/* <h2>  Meet Him</h2> */}
                    <img src="./image/desire.jpg " alt= "deesire" style={ {height: '300px', paddingTop:'3.0em'}}/>                   
                    <h6>   BYAMUNGU Desire</h6>
                   
                    </Cell>

                <Cell className="aboutme-right-col" col={6}>
                    
                                    
                <div  className="about-list" >
                    <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', color: 'grey'}} >                                
                              "He is spending his time creating solutions using javascript and recent technologies! 
                               when not coding he likes playing his guitar,and sometime modelling 3D character for games with Blender. 
                               "
                               </ListItemContent>
                            </ListItem>
                           
                    </List>
                    <p style= {{ width: '103%', margin:'auto' ,fontStyle:'italic'}}>A young creator, team player, optimist and a CEO at Ngana Tech .</p>
                        </div>
                    
                </Cell>
              

                    
             </Grid>
         
               
      </div>
      
        )
    }
}
export default Aboutme;