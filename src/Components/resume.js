import React, { Component } from 'react';
import {Grid, Cell, } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Intro from './intro';





class Resume extends Component{    
    render(){
    
        return(
            <div>
                <Grid>
                    <Cell col={5}>
                            <div style={{textAlign: 'center'}}>
                            <img src="./image/desire.jpg " alt=" desire" style={{height:'200px',paddingRight:'20px', marginTop:'20px', borderRadius:"50%"}}/>
                            </div>
                            {/* <h4 style={{paddingTop:'2em', width: '60%' }}> BYAMUNGU Desire</h4>   */}
                            <Intro 
                                name="BYAMUNGU Desire"
                                careerTitle="Full-Stack Developper"
                                careerIntro ="I am young ,Optimist and Team player"
                                address ="Poland-Poznan"
                                tel="(+48)795-342-660"
                                email="byadiso@gmail.com"
                                
                            />


                                       
                    </Cell>
                    <Cell className="resume-right-col" col={7}>
                    
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear ={2021}
                            schoolName="Poznan university of life sciences"
                            schoolDescription="I am studying agronomy and bioengineering"
                        />
                        <Education
                        startYear={2019}
                        endYear ={2018}
                        schoolName="Andela Boot Camp  Full-stack"
                        schoolDescription="I learnt HTML, CSS, JQuery, Javascript,Node.js, React, MongoBD"
                          />
                        <Education
                            startYear={2014}
                            endYear ={2018}
                            schoolName="University of RWANDA"
                            schoolDescription="I learnt Biotechnology"
                        />
                    <hr sytle={{borderTop: '3px solid #e22947'}}/>
                    
                    <h2>Experience</h2>

                    <Experience
                            startYear={2017}
                            endYear ={2019}
                            jobName="Web Designer at NgaNa Tech"
                            jobDescription="I was working on frontend projects mostly , creating website using javascript and Wordpress"
                        />
                        
                        <Experience
                            startYear={2019}
                            endYear ={2020}
                            jobName="Full stack Developper  at Yoop.rw"
                            jobDescription="I was working as website master, and I developped different  front-end  and back-end features "
                        />
                        <Experience
                            startYear={2019}
                            endYear ={2020}
                            jobName="Web Master at Friends of Green"
                            jobDescription="I was working as website master, and I developped different  frontend features "
                        />
                     </Cell>   
                     <Cell className="resume-right-col" col={12}>      
                        <hr sytle={{borderTop: '3px solid #e22947'}}/>

                        <h2 sytle={{margin: '20px 0 0 20px'}}>Skills</h2>
                        <Skills 
                            skill="HTML"
                            progress={95}
                        />
                        <Skills 
                            skill="CSS"
                            progress={90}
                        />
                      
                        <Skills 
                            skill="Javascript"
                            progress={95}
                        />

                        <Skills 
                            skill="JQuery"
                            progress={70}
                        />
                         <Skills 
                            skill="Node.js"
                            progress={70}
                        />
                         <Skills 
                            skill="React.js"
                            progress={70}
                        />
                          <Skills 
                            skill="MongoDb"
                            progress={65}
                        />
                         <Skills 
                            skill="MSQL"
                            progress={65}
                        />


                    </Cell>
              
       
                </Grid>
                
            </div>
        )
    }
}
export default Resume;