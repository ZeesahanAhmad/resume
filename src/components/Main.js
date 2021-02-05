import React,{Component} from "react";
import Photo from "./photo";
import Education from "./eduQualification";
import Projects from "./projects";
import Skills from "./skills";
import PersonalInfo from "./personal";
import AboutMe from "./aboutMe";
import Interest from "./interest";
import {INTERESTS} from "../dataCollection/interestData";
import {PROJECTS} from "../dataCollection/projectData";
import {PERSONALS} from "../dataCollection/personalData";
import {SKILLS} from "../dataCollection/skillsData";
import {ABOUTME} from "../dataCollection/aboutMeData";
import {EDUCATION} from "../dataCollection/educationData";


class Main extends Component{
    constructor(props){
        super(props);
        this.state={
          interests:INTERESTS,
          projects:PROJECTS,
          personals:PERSONALS,
          skills:SKILLS,
          aboutme:ABOUTME,
          education:EDUCATION
        }
    }
    render(){
        return(
           <div className="container">
            <div className="row">
             <div className="col-12 col-md-4" style={{backgroundColor:"black"}}>
               <Photo/>
               <AboutMe aboutme={this.state.aboutme}/>
               <Skills skills={this.state.skills}/>
             </div>

             <div className="col-12 col-md-8" style={{backgroundColor:"whitesmoke"}}>
               <PersonalInfo personals={this.state.personals}/>
               <Projects projects={this.state.projects}/>
               <Education education={this.state.education}/>
               <Interest interests={this.state.interests}/>
             </div>
            </div>
            
           </div>
        )
    }
}
export default Main;