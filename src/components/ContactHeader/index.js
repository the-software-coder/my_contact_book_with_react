import React, { Component } from 'react';
import './index.css';

/*

  Component responsible for rendering the avatar and the contact name

*/

export default class ContactHeader extends Component {
    render() {
        return (
            <>
                <div
                    className="contact-header"
                    role="button"
                    onClick={this.props.contactDetailsListHandler}
                >
                    <div className="contact-header-contact-name">
                        <img src={this.props.contact.avatar} alt="avatar"/>
                        <p>{this.props.contact.firstName + ' ' + this.props.contact.lastName}</p>
                    </div>
                    <div>
                        { this.props.listOpen ? <img className="contact-header-arrow" src="./arrow-up.svg" alt="arrow-up" /> 
                        : <img className="contact-header-arrow" src="./arrow-down.svg" alt="arrow-down" /> }
                    </div>
                </div>
            </>
        )
    }
}
