import { Component } from "react";

class HeadingForm extends Component {
  constructor(props) {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    this.props.update({[e.target.name]: e.target.value});
  }

  render() {
    const [name, email, phone, location] = this.props.defaults;
    return (
      <form>
        <input onInput={this.handleUpdate} type="text" defaultValue={name} key="name" name="name"/>
        <input onInput={this.handleUpdate} type="text" defaultValue={email} key="email" name="email"/>
        <input onInput={this.handleUpdate} type="text" defaultValue={phone} key="phone" name="phone"/>
        <input onInput={this.handleUpdate} type="text" defaultValue={location} key="location" name="location"/>
      </form>
    )
  }
}

export default HeadingForm;
