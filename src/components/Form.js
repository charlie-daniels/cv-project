import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    this.props.update(e.target.name, e.target.value, this.props.name);
  }

  render() {
    return (
      <form>
        {Object.keys(this.props.fields).map((key) => {
          return (
            <input 
              onInput={this.handleUpdate} 
              type="text" 
              defaultValue={this.props.fields[key]} 
              key={key} 
              name={key} 
            />
          )
        })}
      </form>
    )
  }
}

export default Form;
