import React, { Component } from 'react';
import ContactDetails from '../ContactDetails';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

/*

  Component responsible for dealing with the add new contact button, the save contact button and with the ContactDetails component
  The reusable ContactDetails component is responsible for rendering all the contact details

*/

class AddContact extends Component {
  constructor(props){
    super(props);
    this.resetNewContact = {
      contact: {
        id: null,
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        phoneNumber: '',
        avatar: null,
        avatarName: ''
      },
      listOpen: false,
      enableEdit: true
    };

    this.state = {
      ...this.resetNewContact,
    };
  }

  // Resetting the contact details fields each time the add new contact button is clicked
  newContactButtonHandler = () => {
    this.setState({...this.resetNewContact, 'listOpen': !this.state.listOpen});
  }

  // Updating the parent component ContactBook state each time the save button is clicked
  saveButtonHandler = (e) => {
    e.preventDefault();

    const avatarInput = document.getElementById('avatarInput');
    let avatarPath = 'snoopy_doopy.png';

    if(avatarInput && avatarInput.files.length)
      avatarPath = (window.URL || window.webkitURL).createObjectURL(avatarInput.files[0]);

    this.props.newContactHandler({...this.state.contact, 'id': uuidv4(), 'avatar': avatarPath, 'avatarName': avatarPath === 'snoopy_doopy.png' ? avatarPath : this.state.contact.avatarName });
    this.setState({...this.resetNewContact});
  }

  // Updating the current component state each time something changes in one of the fields rendered by the ContactDetails component
  onChangeInputHandler = (updatedContact) => {
    this.setState({...this.state, 'contact': {...updatedContact.contact}});
  }

  render = () => {
    return (
      <div className="add-contact-wrapper">
        <div
          className="add-contact-header"
          role="button"
          onClick={this.newContactButtonHandler}
        >
          <div className="add-contact-header-plus">
            <div className="add-contact-header-img">
            <img src="./plus.svg" alt="add contact"/>
            </div>
          </div>
        </div>
        {this.state.listOpen && (

          <div className="add-contact-list">

            <ContactDetails contactDetails={this.state} onChangeInputHandler={this.onChangeInputHandler} />
        
            <div className="add-btn-container">
              <button onClick={this.saveButtonHandler}>save</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddContact;
