import { Component } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  formSubmitHandler = ({ name, number }) => {
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
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
