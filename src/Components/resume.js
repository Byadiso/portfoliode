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
                            <img src="./image/desire.png " alt=" desire" style={{height:'200px', marginTop:'20px'}}/>
                            </div>
                            {/* <h4 style={{paddingTop:'2em', width: '60%' }}> BYAMUNGU Desire</h4>   */}
                            <Intro 
                                name= "BYAMUNGU Desire"
                                careerTitle="Graphic designer"
                                careerIntro ="I am young ,creative and nature observer"
                                address ="POLAND-Poznan"
                                tel="(+48)795-342-660"
                                email="byadiso@gmail.com"
                                
                            />


                                       
                    </Cell>
                    <Cell className="resume-right-col" col={7}>
                    
                        <h2>Education</h2>
                        <Education
                            startYear={208}
                            endYear ={2013}
                            schoolName="Petit seminaire de NYUNDO"
                            schoolDescription="I did  my secondary studies at this beautfull school , i studied MCB."
                        />
                        <Education
                            startYear={2014}
                            endYear ={2018}
                            schoolName="University of RWANDA"
                            schoolDescription="I have done My University  studied  at NYARUGENGE Campus where i studied Biotechnology"
                        />
                    <hr sytle={{borderTop: '3px solid #e22947'}}/>
                    
                    <h2>Experience</h2>

                    <Experience
                            startYear={2014}
                            endYear ={2016}
                            jobName="First Job"
                            jobDescription="I worked at NGANA TEch as a freelancer graphic designer."
                        />
                        
                        <Experience
                            startYear={2012}
                            endYear ={2019}
                            jobName="Second Job"
                            jobDescription="I worked at NEW TECHNOLOGIES as a website designer. "
                        />
                     </Cell>   
                     <Cell className="resume-right-col" col={12}>      
                        <hr sytle={{borderTop: '3px solid #e22947'}}/>

                        <h2 sytle={{margin: '20px 0 0 20px'}}>Skills</h2>
                        <Skills 
                            skill="Photoshop"
                            progress={95}
                        />
                        <Skills 
                            skill="Illustrator"
                            progress={90}
                        />
                      
                        <Skills 
                            skill="Blender"
                            progress={80}
                        />

                        <Skills 
                            skill="Adobe Premier Pro"
                            progress={65}
                        />


                    </Cell>
              
       
                </Grid>
                
            </div>
        )
    }
}
export default Resume;