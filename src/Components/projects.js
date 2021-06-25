import React, { Component } from 'react';
import{Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import { Link } from 'react-router-dom';

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
            <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/ngana.jpg") center/ cover'}}>
           </CardTitle>
            <CardText>
               <Link to= {{ pathname: "https://www.nganatech.com/" }} target="_blank">Ngana Tech Website </Link> 
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
            <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/atconsult.jpg") center/ cover'}}>
             </CardTitle>
            <CardText>
                <Link to= {{ pathname: "https://www.atconsult.rw/" }} target="_blank"> AtConsult.rw project </Link> 
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
            <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/bioenv.jpg") center/ cover'}}>
             </CardTitle>
            <CardText>
            <Link to= {{ pathname: "http://www.bioenvirontrust.org/" }} target="_blank">Friends of Green project </Link> 
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
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/yoop.jpg") center/ cover'}}>
                </CardTitle>
             <CardText>
                 <Link to= {{ pathname: "https://www.yoop.rw/" }} target="_blank"> yoop.rw project </Link> 
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>Leave a comment?</Button>
             </CardActions>
             <CardMenu style= {{color: '#fff'}}>
                  <IconButton name="share"/>
              </CardMenu>
             
             </Card>
            {/* Project 2*/}
             
            <Card shadow ={5} style = {{minWidth: "450", margin: 'auto'}}>
             <CardTitle style= {{color: 'black', height: '286px', background: 'url("./image/wooco.jpg") center/ cover'}}>
              </CardTitle>
             <CardText>
                <Link to= {{ pathname: "http://www.wocoofficial.org/" }} target="_blank"> Wocoo.rw project </Link> 
             </CardText>
             <CardActions border>
                 <Button colored>View</Button>
                 <Button colored>Leave a comment?</Button>
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
                 <Button colored>Leave a comment?</Button>
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
                 <Button colored>Leave a comment?</Button>
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
                 <Button colored>Leave a comment?</Button>
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
                 <Button colored>Leave a comment?</Button>
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
                 <Button colored>Leave a comment?</Button>
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
                 <Button colored>Leave a comment?</Button>
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
                 <Button colored>Leave a comment?</Button>
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
                    <Tab>WordPress Projects</Tab>
                    <Tab>Blogging projects</Tab>
                    <Tab>E-commerce Projects</Tab>
                    <Tab>Social Media Projects</Tab>
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