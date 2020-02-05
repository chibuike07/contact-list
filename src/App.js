import React, { Component } from "react";
import "./App.css";
import ContactList from "./ContactList";

class App extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <h1>Contact List</h1>
        <ContactList contact={this.props.contacts} />
      </div>
    );
  }
}
export default App;
