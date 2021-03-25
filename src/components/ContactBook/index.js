import React, {Component} from 'react';
import Contact from '../Contact';
import AddContact from '../AddContact';
import { v4 as uuidv4 } from 'uuid';
import './index.css';

/*
  App main component, holds all the app functionalities
  Component responsible for dealing with:
          Save a new contact; 
          Delete a contact;
          Update a contact.
*/

class ContactBook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: uuidv4(),
          firstName: 'Snoopy',
          lastName: 'Doopy',
          address: 'Peanuts Drive 007',
          city: 'Los Angeles',
          phoneNumber: '+41...',
          avatar: 'snoopy_doopy.png',
          avatarName: 'snoopy_doopy.png'
        },
        {
          id: uuidv4(),
          firstName: 'Miss',
          lastName: 'Piggy',
          address: 'Pig Drive',
          city: 'New York',
          phoneNumber: '+41...',
          avatar: 'miss_piggy.png',
          avatarName: 'miss_piggy.png'
        },
        {
          id: uuidv4(),
          firstName: 'Mr.',
          lastName: 'Kermit',
          address: 'Muppets Show Drive 007',
          city: 'Los Angeles',
          phoneNumber: '+41...',
          avatar: 'kermit.png',
          avatarName: 'kermit.png'
        }
      ]
    } 
  }
  
  // Updating a selected contact
  updateContactHandler = (contact) => {
    const index = this.state.contacts.findIndex(cont => cont.id === contact.id);
    const updatedcontact = this.state.contacts;
    updatedcontact[index] = contact;
    this.setState({'contacts': [...updatedcontact]});
  }

  // Deleting a selected contact
  deleteContactHandler = (contact) => {
    const index = this.state.contacts.findIndex(cont => cont.id === contact.id);
    const updatedcontact = this.state.contacts;
    updatedcontact.splice(index, 1);
    this.setState({'contacts': [...updatedcontact]});
  }

  // Creating a new contact
  newContactHandler = (contact) => {
    this.setState({'contacts': [...this.state.contacts, contact]});
  }

  render = () => {
    return (
      <div className="contact-book-container">
        <h1> My Contact Book by Erhan </h1>

        <AddContact newContactHandler={this.newContactHandler} />
        {this.state.contacts.map(contact => 
          <Contact contact={contact} key={contact.id} updateContactHandler={this.updateContactHandler} deleteContactHandler={this.deleteContactHandler}/>
        )}
      </div>
    );
  } 
}

export default ContactBook;
