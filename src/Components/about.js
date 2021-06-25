import React, { Component } from 'react';
import {Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl';

class Aboutme extends Component{
    render(){
        return(
        <div className='aboutme-body'>
             <Grid className='aboutme-grid'>
                <Cell col={6}> 
                     {/* <h2>  Meet Him</h2> */}
                    <img src="./image/desire.png " alt= "deesire" style={ {height: '300px', paddingTop:'3.0em'}}/>                   
                    <h6>   BYAMUNGU Desire</h6>
                   
                    </Cell>

                <Cell className="aboutme-right-col" col={6}>
                    
                                    
                <div  className="about-list" >
                    <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '20px', color: 'grey'}} >                                
                              "He spends his time composing some good  melody, 
                               He likes creating things and play With some code,
                               "
                               </ListItemContent>
                            </ListItem>
                           
                    </List>
                    <p style= {{ width: '103%', margin:'auto' ,fontStyle:'italic'}}>A young creator, obsessed With the beauty of the nature and optimist of everyday.</p>
                        </div>
                    
                </Cell>
              

                    
             </Grid>
         
               
      </div>
      
        )
    }
}
export default Aboutme;