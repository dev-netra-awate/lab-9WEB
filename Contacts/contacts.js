import React from 'react';
import './Contacts.scss';

export class Contacts extends React.Component {
    constructor(props) {
        super(props);
        const contacts = this.props.contacts;
        
    }
    render() {
        const contactsElement = this.props.contacts.map((c,i) => 
            <li key={i}> {c.firstName} {c.lastName}</li>);
        return (
        <div className="contacts-container">
            Contacts
            <ul>{contacts}</ul>
            </div>);
    }
}