import { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import FindInput from "./components/FindInput";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  filterHendler = ({ filter }) => {
    this.setState({ filter: filter });
  };
  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some((elem) => elem.name === name)) {
      // console.log(
      //   this.state.contacts.some((elem) => elem.name === name)
      // );
      window.alert(`${name} is already in contacts`);
      return;
    }
    this.setState((prevState) => {
      return {
        contacts: [
          { id: uuidv4(), name: name, number: number },
          ...prevState.contacts,
        ],
      };
    });
  };

  render() {
    const filter = this.state.filter.toLowerCase();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <FindInput onChange={this.filterHendler} />
        <ContactList
          contacts={
            this.state.filter === ""
              ? this.state.contacts
              : this.state.contacts.filter(({ name }) => {
                  return name.toLowerCase().includes(filter);
                })
          }
        />
      </div>
    );
  }
}

export default App;
