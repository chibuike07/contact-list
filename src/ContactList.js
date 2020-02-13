import React, { Component } from "react";
import Contact from "./Contact";
import "./ContactList.css";
import { findDOMNode } from "react-dom";
class ContactList extends Component {
  state = {
    search: "",
    contacts: this.props.contact,
    pnoneValue: "",
    deleteAll: true
  };
  HandleChange = event => {
    this.setState({ search: event.target.value });
  };

  addContact = event => {
    event.preventDefault();
    if (isNaN(this.refs.name.value)) {
      // alert("yes");
    } else {
      alert("Name input do not accept numbers");
      this.refs.name.focus();
      return;
    }

    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor(Math.random * 100 + 1);

    let mapNameValue = this.state.contacts.map(value => value.name);
    let mapPhoneValue = this.state.contacts.map(value => value.phone);
    if (mapNameValue.includes(name) && mapPhoneValue.includes(phone)) {
      alert(" No duplicate contact information required");
      this.refs.name.focus();
      return;
    } else {
      //
    }
    if (phone.length >= 11 && phone.length <= 14) {
      // console.log("current");
    } else {
      alert("Number must be  less than 14 and equal to 11 digits");
      console.log("not current");
      return;
    }
    this.setState({
      contacts: this.state.contacts.concat({ id, name, phone })
    });
    this.setState({ deleteAll: true });
    event.target.reset();
  };
  handleDeleteOneItem = contact => {
    this.setState({
      contacts: this.state.contacts.filter(item => item !== contact)
    });
  };
  handleClearAll = () => {
    this.setState({
      contacts: [],
      deleteAll: !this.state.deleteAll
    });
  };
  handleMenuIcon = event => {
    let form = this.refs.form;
    if (form.style.display === "none") {
      form.style.display = "grid";
    } else {
      form.style.display = "none";
    }
  };
  handleToggle = () => {
    const el = findDOMNode(this.refs.list);
    el.classList.toggle("toggle");
    console.log(el);
  };
  render() {
    // console.log(this.props.show);
    let filteredContent = this.state.contacts.filter(contact => {
      return (
        contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    return (
      <div className="cont">
        <div className="menu" onClick={this.handleMenuIcon}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>

        <div className="form">
          <form onSubmit={this.addContact} ref="form">
            <input type="text" placeholder="add name" ref="name" required />
            <input
              type="number"
              placeholder="add contact"
              ref="phone"
              required
            />
            <button type="submit">add new contact</button>
          </form>
        </div>
        {this.state.deleteAll && (
          <div className="search">
            <input
              type="search"
              placeholder="search"
              value={this.state.search}
              onChange={this.HandleChange}
            />
          </div>
        )}
        <ul ref="list">
          {filteredContent.map((contact, index) => {
            return (
              <Contact
                contact={contact}
                key={index}
                removeOneItem={this.handleDeleteOneItem}
              />
            );
          })}
        </ul>
        {this.state.deleteAll && (
          <div className="rm">
            <button onClick={this.handleClearAll}>clearAll</button>
          </div>
        )}
        <div>
          <button onClick={this.handleToggle}>click</button>
        </div>
      </div>
    );
  }
}
export default ContactList;
