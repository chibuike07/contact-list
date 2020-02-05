import React, { Component } from "react";
import Contact from "./Contact";
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "scott",
      contacts: props.contact
    };
  }
  HandleChange = event => {
    this.setState({ search: event.target.value.substr(0, 20) });
  };
  addContact = event => {
    event.preventDefault();
    console.log(this.refs.name.value);
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor(Math.random * 100 + 1);
    this.setState({
      contacts: this.state.contacts.concat({ id, name, phone })
    });
    this.refs.name.value = "";
    this.refs.phone.value = "";
  };
  // console.log();s
  render() {
    let filteredContent = this.state.contacts.filter(contact => {
      return (
        contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    return (
      <div>
        <input
          type="text"
          placeholder="filter throught"
          value={this.state.search}
          onChange={this.HandleChange}
        />
        <form onSubmit={this.addContact}>
          <input type="text" placeholder="add name" ref="name" />
          <input type="text" placeholder="add contact" ref="phone" />
          <button type="submit">add new contact</button>
        </form>
        <ul>
          {filteredContent.map(contact => {
            return <Contact contact={contact} key={contact.id} />;
          })}
        </ul>
      </div>
    );
  }
}
export default ContactList;
