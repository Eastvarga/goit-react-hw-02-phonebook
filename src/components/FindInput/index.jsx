import { Component } from "react";

class FindInput extends Component {
  state = {
    filter: "",
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value }, () => this.props.onChange(this.state));
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          // autocomplete="off"
          type="text"
          name="filter"
          value={this.state.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default FindInput;
