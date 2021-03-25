import React, { Component } from 'react';
import ContactHeader from '../ContactHeader';
import ContactDetails from '../ContactDetails';
import './index.css';

/*

  Component responsible for dealing with the:
          edit/save contact changes button; 
          delete contact button;
          ContactDetails component; 
          ContactHeader component.

  The reusable ContactDetails component is responsible for rendering all the contact details
  The reusable ContactHeader component is responsible for rendering all the contact header information

*/

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      contact: {
        ...this.props.contact
      },
      listOpen: false,
      enableEdit: false,
    };
  }

  // Showing or hiding the contact details
  contactDetailsListHandler = () => {
    this.setState({'listOpen': !this.state.listOpen});
  }

  // Edit or save button
  // Updating the parent component ContactBook state each time the save button is clicked
  editButtonHandler = () => { 
    this.setState({'enableEdit': !this.state.enableEdit});

    const avatarInput = document.getElementById('avatarInput');
    let avatarPath = this.props.contact.avatar;

    if(avatarInput && avatarInput.files.length) 
      avatarPath = (window.URL || window.webkitURL).createObjectURL(avatarInput.files[0]);

    this.props.updateContactHandler({...this.state.contact, 'avatar': avatarPath, 'avatarName': this.state.avatarName});
  }

  // Updating the current component state each time something changes in one of the fields rendered by the ContactDetails component
  onChangeInputHandler = (updatedContact) => {
    this.setState({...this.state, 'contact': {...updatedContact.contact}});
  }

  render = () => {
    return (
      <div className="contact-wrapper">
         <ContactHeader contact={this.props.contact} listOpen={this.state.listOpen} contactDetailsListHandler={this.contactDetailsListHandler}/>
        {this.state.listOpen && (
          <div className="contact-list">

            <ContactDetails contactDetails={this.state} onChangeInputHandler={this.onChangeInputHandler} />

            <div className="btn-container">
              <button id="btn-save" onClick={this.editButtonHandler}>{!this.state.enableEdit ? "Edit" : "save"}</button>
              <button id="btn-delete" onClick={() => this.props.deleteContactHandler(this.state.contact)}>Delete</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;



