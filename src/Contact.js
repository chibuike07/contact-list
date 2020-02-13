import React from "react";
import "./Contact.css";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="list" ref="list">
          <li>
            <span className="span1">{this.props.contact.name}</span>
            <span className="span2">{this.props.contact.phone}</span>
            <button
              onClick={() => this.props.removeOneItem(this.props.contact)}
            >
              <b>del</b> <strong>x</strong>
            </button>
          </li>
        </div>
      </div>
    );
  }
}
export default Contact;
