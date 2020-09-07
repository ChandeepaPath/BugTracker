import React, { Component } from 'react'
import Project1 from './Project1';
import Newsfeed from './Newsfeed';
//import CarouselN from './CarouselN.js';
export default class Projectlist extends Component {
    render() {
        
        return (
            <div className="height:100px">
              <div className="max-height=50%">
          
                <Newsfeed/>
            <div className="row">    
                <div className="col-md-3"><Project1/> </div> 
                <div className="col-md-3"><Project1/> </div> 
            </div> 
            </div>
            </div>
        )
    }
}
