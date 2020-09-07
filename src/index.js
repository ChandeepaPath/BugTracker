import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Components/Dashboard.js';
import { BrowserRouter as Router} from 'react-router-dom';

class Index extends React.Component{
    render(){
        return(
            <div>
            <Dashboard/>
            </div> 
        );
    }
}



ReactDOM.render(
<Router>
    
    <Index/>
</Router>
, document.getElementById('root'));