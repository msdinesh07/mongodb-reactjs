import React, { Component } from 'react';

import './App.css';

import Testform from './TestForm.js';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';



class App extends Component {
	
	constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
}
	
  render() {
    return (
       <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Event Registration</h1>
                                
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
				
				<div>
					<Testform/>
				</div>
</div>
    );
  }
}

export default App;
