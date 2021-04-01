import { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
