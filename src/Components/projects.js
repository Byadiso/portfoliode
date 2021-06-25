import React, { Component } from 'react';
import{Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
            this.state ={ activeTab:0};
        }
  toggleCategories() {

    if (this.state.activeTab === 0){
        return(
     <div className=" projects-grid">
           {/* Project 1 */}
           
            <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/logo1.jpg") center/ cover'}}>
           </CardTitle>
            <CardText>
                Log RBSN was an awesome project ever did
            </CardText>
            <CardActions border>
                <Button colored>View</Button>
                <Button colored>What is your comment?</Button>
            </CardActions>
            <CardMenu style= {{color: '#fff'}}>
                 <IconButton name="share"/>
             </CardMenu>
            
            </Card>
           {/* Project 2*/}
            
           <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/logo2.jpg") center/ cover'}}>
             </CardTitle>
            <CardText>
                Logo Umurage was an project ever did
            </CardText>
            <CardActions border>
                <Button colored>View</Button>
                <Button colored>What is your comment?</Button>
            </CardActions>
            <CardMenu style= {{color: '#fff'}}>
                 <IconButton name="share"/>
             </CardMenu>
            
            </Card>

        {/* Project 3 */}
            
        <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/logo3.jpg") center/ cover'}}>
             </CardTitle>
            <CardText>
                Logo Ngana  was an awesome project ever did
            </CardText>
            <CardActions border>
                <Button colored>View</Button>
                <Button colored>What is your comment?</Button>
            </CardActions>
            <CardMenu style= {{color: '#fff'}}>
                 <IconButton name="share"/>
             </CardMenu>
            
            </Card>

   
        </div>
           
        )
    } else if(this.state.activeTab === 1){
        return(
            <div className=" projects-grid">
            {/* Project 1 */}
            
             <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/poster.jpg") center/ cover'}}>
                </CardTitle>
             <CardText>
                 RBSN was an awesome project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
            {/* Project 2*/}
             
            <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/poster2.jpg") center/ cover'}}>
              </CardTitle>
             <CardText>
             Flyer Design was an project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
 
         {/* Project 3 */}
             
         <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/poster3.jpg") center/ cover'}}>
              </CardTitle>
             <CardText>
                 Ngana  was an awesome project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
 
    
         </div>
        )
    } else if (this.state.activeTab === 2){
        return(
        
            <div className=" projects-grid">
            {/* Project 1 */}
            
             <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/digital2.jpg") center/ cover'}}>
             </CardTitle>
             <CardText>
                 Children are awesome
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
            {/* Project 2*/}
             
            <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/digital.jpg") center/ cover'}}>
             </CardTitle>
             <CardText>
             A mom was an project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
 
         {/* Project 3 */}
             
         <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/digital2.jpg") center/ cover'}}>
              </CardTitle>
             <CardText>
             Africa was an awesome project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
 
    
         </div>
        )
    }else if(this.state.activeTab === 3){
        return(
        
            <div className=" projects-grid">
            {/* Project 1 */}
            
             <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/digital3.jpg") center/ cover'}}>
             </CardTitle>
             <CardText>
             Kanyanga was an awesome project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
            {/* Project 2*/}
             
            <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/digital1.jpg") center/ cover'}}>
             </CardTitle>
             <CardText>
             Cheese Design was an project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
 
         {/* Project 3 */}
             
         <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/logo3.jpg") center/ cover'}}>
               </CardTitle>
             <CardText>
             Wine Design  was an awesome project ever did
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>What is your comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
 
    
         </div>
        )
    }
  }
  
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab ={ this.state.activeTab} onChange ={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Logo</Tab>
                    <Tab>Posters</Tab>
                    <Tab>Digital Design</Tab>
                    <Tab>Product Design</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid >
                        <Cell col={12}>
                        <div className="content">{ this.toggleCategories()} </div>
                        </Cell>
                    </Grid>                
                </section>   
            </div>
        )
    }
}

export default Projects;