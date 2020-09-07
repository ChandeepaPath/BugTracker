import React, { Component } from 'react'
//import {Switch,Route} from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import App from "../App.js";
import Projectlist from "./Projectlist";
//import Navbar from './Navbar';
import Newsfeed from './Newsfeed';
import Error from './Error';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Help from './Help';
import ProjectIssues from './BclNext/ProjectIssues';
import Style from './Style.css'

import { NavigationBar } from './NavigationBar.js';
export default class Dashboard extends Component {
    render() {
        return (
<div id="dashboard">
         <React.Fragment>
          <div>

        <div className="sticky-top">
        <NavigationBar/>
        </div>
    
          
                <Switch>
                  
                  <Route exact path="/Projectlist" component={Projectlist}  />
                  <Route path="/Aboutus" component={Aboutus}  /> 
                  <Route path="/Help" component={Help}  />      
                   <Route path="/BclNext/ProjectIssues" component={ProjectIssues}  />      

                    <Route component={Error}  />
                  
                </Switch>
         <div className="fixed-bottom">    
         <Footer/>
        </div>
         </div>
          </React.Fragment>
          </div>
          
          
            
        )
    }
}
