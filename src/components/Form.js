import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    this.props.update({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form>
        {this.props.fields.map((field) => {
          return (
            <input 
              onInput={this.handleUpdate} 
              type="text" 
              defaultValue={field.default} 
              key={field.name} 
              name={field.name} 
            />
          )
        })}
      </form>
    )
  }
}

export default Form;
