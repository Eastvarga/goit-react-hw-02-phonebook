import { Component } from "react";
import { form, name, input, tel, button } from "./styles.module.css";
const INITIAL_STATE = {
  name: "",
  number: "",
};

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState(() => {
      return { ...INITIAL_STATE };
    });
  };
  render() {
    return (
      <form className={form} onSubmit={this.handleSubmit}>
        <label className={name}>
          Name
          <input
            className={input}
            // autocomplete="off"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={name}>
          📞
          <input
            className={tel}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={button} type="submit">
          Add to contacts
        </button>
      </form>
    );
  }
}

export default Form;
