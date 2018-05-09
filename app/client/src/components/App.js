// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import GuestForm from './GuestForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddTodo = this.toggleAddTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleAddTodo(e){
    e.preventDefault();
     this.props.mappedToggleAddGuest();
  }

  addTodo(e){
      e.preventDefault();
      const form = document.getElementById('addTodoForm');
      if(form.todoText.value !== ""  && form.todoDesc.value !== ""){
        const data = new FormData();
       data.append('todoText', form.todoText.value);
        data.append('todoDesc', form.todoDesc.value);
        // const data = {
        //   todoText: form.todoText.value,
        //   todoDesc: form.todoDesc.value
        // }
        this.props.mappedAddTodo(data);
      form.reset();
      }
      else{
        return ;
      }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Messenger App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
          <NavDropdown eventKey={2} title="Guests">
             <LinkContainer to={{ pathname: '/manage/guests', query: {  } }}>
              <MenuItem eventKey={2.1}>Manage Guests</MenuItem>
             </LinkContainer>
              <LinkContainer to={{ pathname: '/manage/guests/upload', query: {  } }}>
                  <MenuItem eventKey={2.1}>Upload</MenuItem>
              </LinkContainer>
          </NavDropdown>
          <NavDropdown eventKey={3} title="Companies">
              <LinkContainer to={{ pathname: '/manage/companies', query: {  } }}>
                  <MenuItem eventKey={3.1}>Manage Companies</MenuItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/manage/companies/upload', query: {  } }}>
                  <MenuItem eventKey={3.2}>Upload</MenuItem>
              </LinkContainer>
          </NavDropdown>
          <NavDropdown eventKey={4} title="Message Templates">
              <LinkContainer to={{ pathname: '/manage/templates', query: {  } }}>
                  <MenuItem eventKey={4.1}>Manage Message Templates</MenuItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/manage/templates/upload', query: {  } }}>
                  <MenuItem eventKey={4.2}>Upload</MenuItem>
              </LinkContainer>
          </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddTodo &&
    <GuestForm addTodo={this.addTodo} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
