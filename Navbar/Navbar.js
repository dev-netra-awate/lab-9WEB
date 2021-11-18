import React from 'react';
import './Navbar.scss';

export class Navbar extends React.Component {
    Constructer(props){ 
        super(props);
    }
    
    

    render() {
        return (
        <nav>
            <span className="menu" onClick={this.createContact.bind(this)}>
                <img alt = "Menu" src="assets/menu.png"></img>
                </span>
            <h1 className="title">Contacts App</h1>
            <img alt = "Add" src="assets/add.png"></img>
            <span className="create"></span>
        </nav>);
    }
}