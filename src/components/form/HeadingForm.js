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
    return (
      <form>
        <input onInput={this.handleUpdate} type="text" placeholder="John Appleseed" key="name" name="name"/>
        <input onInput={this.handleUpdate} type="text" placeholder="j.appleseed@apple.com" key="email" name="email"/>
        <input onInput={this.handleUpdate} type="text" placeholder="0800 00 1066" key="phone" name="phone"/>
        <input onInput={this.handleUpdate} type="text" placeholder="Las Vegas, NV" key="location" name="location"/>
      </form>
    )
  }
}

export default HeadingForm;
