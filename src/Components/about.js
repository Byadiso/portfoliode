import React, { Component } from 'react';
import {Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl';

class Aboutme extends Component{
    render(){
        return(
        <div className='aboutme-body'>
             <Grid className='aboutme-grid'>
                <Cell col={6}> 
                     {/* <h2>  Meet Him</h2> */}
                    <img src="./image/desire.jpg " alt= "deesire" style={ {height: '140px',width: '140px',borderRadius: '50%', paddingTop:'2.0em'}}/>                   
                    <h6> BYAMUNGU Desire</h6>
                   
                </Cell>

                <Cell className="aboutme-right-col" col={6}>
                    
                                    
                <div  className="about-list" >
                    <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '17px', color: 'grey'}} >                                
                              "He is spending his time creating things using javascript!When not coding he likes playing his guitar,and sometime modelling 3D characters for games with Blender. 
                               "
                               </ListItemContent>
                            </ListItem>
                            <p style= {{ width: '100%', margin:'0px' ,fontStyle:'italic'}}>A young creator, team player, optimist and a CEO at Ngana Tech .</p>
                           
                    </List>
                    
                </div>
                    
                </Cell>
              

                    
             </Grid>
         
               
      </div>
      
        )
    }
}
export default Aboutme;