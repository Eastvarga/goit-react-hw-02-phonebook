import { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
