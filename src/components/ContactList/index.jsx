import { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button id={id} type="button" onClick={this.props.onClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
