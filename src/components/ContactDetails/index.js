import React, { Component } from 'react';
import './index.css';

/*

  Component responsible for dealing with all the contact detail fields
  This component is being used to create e new contact and to render the contacts details

*/

class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.avatarInputRef = '';
  }
  btnAvatarHandler = (e) => {
    e.preventDefault();
    if(this.props.contactDetails.enableEdit)
      this.avatarInputRef.click();
  }

  render = () => {
    return (
      <>
        <div className="contact-details">
          <div className="contact-details-item-box">
            <p>First name:</p>
            <input
              className="contact-details-list-item"
              type="text"
              value={this.props.contactDetails.contact.firstName}
              disabled={!this.props.contactDetails.enableEdit}
              onChange={(e) => this.props.onChangeInputHandler({contact: {...this.props.contactDetails.contact, 'firstName': e.target.value}})}
            />
          </div>

          <div className="contact-details-item-box">
            <p>Last name:</p>
            <input
              className="contact-details-list-item"
              type="text"
              value={this.props.contactDetails.contact.lastName}
              disabled={!this.props.contactDetails.enableEdit}
              onChange={(e) => this.props.onChangeInputHandler({contact: {...this.props.contactDetails.contact, 'lastName': e.target.value}})}
            />
          </div>
        
          <div className="contact-details-item-box">
            <p>Address:</p>
            <input
              className="contact-details-list-item"
              type="text"
              value={this.props.contactDetails.contact.address}
              disabled={!this.props.contactDetails.enableEdit}
              onChange={(e) => this.props.onChangeInputHandler({contact: {...this.props.contactDetails.contact, 'address': e.target.value}})}
            />
          </div>

          <div className="contact-details-item-box">
            <p>City:</p>
            <input
              className="contact-details-list-item"
              type="text"
              value={this.props.contactDetails.contact.address}
              disabled={!this.props.contactDetails.enableEdit}
              onChange={(e) => this.props.onChangeInputHandler({contact: {...this.props.contactDetails.contact, 'city': e.target.value}})}
            />
          </div>

          <div className="contact-details-item-box">
            <p>Phone number:</p>
            <input
              className="contact-details-list-item"
              type="text"
              value={this.props.contactDetails.contact.phoneNumber}
              disabled={!this.props.contactDetails.enableEdit}
              onChange={(e) => this.props.onChangeInputHandler({contact: {...this.props.contactDetails.contact, 'phoneNumber': e.target.value}})}
            />
          </div>
          <div className="contact-details-item-box">
              <form id="avatarForm" encType="multipart/form-data">
                  <input id="avatarInput" ref={input => this.avatarInputRef = input} onChange={(e) => this.props.onChangeInputHandler({contact: {...this.props.contactDetails.contact, 'avatarName': e.target.files[0].name}})} hidden="hidden" type="file" accept="image/png, image/jpeg" />
                  <button id="btn-avatar" onClick={this.btnAvatarHandler} >choose avatar</button>
                  <span>{this.props.contactDetails.contact.avatarName}</span>
              </form>
            </div>
        </div>
      </>
    );
  }
}

export default ContactDetails;
