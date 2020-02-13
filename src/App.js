import React, { Component } from "react";
import ContactList from "./ContactList";
import Header from "./header";
import Footer from "./Footer";
import "./app.css";
import { findDOMNode } from "react-dom";
class App extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <div className="app">
        <Header />
        <div>
          <ContactList
            contact={this.props.contacts}
            show={this.handleMenuIcon}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
