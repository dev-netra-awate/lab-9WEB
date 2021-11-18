import React from 'react';
import './App.scss';
import {Navbar} from './Navbar/Navbar';
import {Contacts} from './Contacts/Contacts';

export class App extends React.Component{

   constructor (props){
     super(props);
     this.state = {
       contacts: [
         {"firstname": "Taru", "lastname": "shukla"},
         {"firstname": "Manu", "lastname": "shukla"}
       ]
     }
   }


  //  componentDidMount(){
  //    fetch("data/contacts.json").then((response) => response.json())
  //    .then((contacts)=> {this.setState({contacts});
  //  });
  // componentDidMount(){
  //   fetch("http://localhost:3000/contacts").then((response) => response.json())
  //   .then((contacts)=> {this.setState({contacts});
  // });
  // }

componentDidMount(){
const toJson = (response) => response.json();
const loadData = (config) =>{
  fetch(config.contacts_api_url).then(toJson)
.then((contacts) =>  this.setState({contacts}));
};
fetch ('config/config.json').then(toJson).then(loadData);
}




  create(){
    this.setState((state,props) =>({
      contacts: [...state.contacts,
      {"firstname": "Add first name", "lastname": "add last name"}
      ]
    }));
    
  }



  render (){
    return (<div>
<Navbar createHandler= {this.create.bind(this)}></Navbar>
<Contacts contacts={this.state.contacts}></Contacts>
    </div>);
  }
}