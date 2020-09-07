import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import {Card , Button} from 'react-bootstrap';

export default class Project1 extends Component {
    render() {
        return (
            <div className="container mt-4 ml-4" >
              <div>
           
                <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first" bg="dark">
      <Nav.Item>
        <Nav.Link href="#first">Project</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Description</Nav.Link>
      </Nav.Item>
  
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Project 1</Card.Title>
    <Card.Text>
            
    </Card.Text>
    <Link to="BclNext/ProjectIssues">  
      <Button variant="dark"  data-toggle="tooltip" title="Go to issues">Current Progress</Button>
    </Link>
  </Card.Body>
</Card> 
     
</div>
            </div>
        )
    }
}
