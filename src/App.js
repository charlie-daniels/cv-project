import { Component } from "react";
import Heading from "./components/preview/Heading";
import Form from "./components/form/Form";

class App extends Component {
  constructor() {
    super();
    
    this.update = this.update.bind(this);

    this.state = {
      name: 'John Appleseed',
      email: 'j.appleseed@apple.com',
      phone: '0773 457 1263',
      location: 'London, UK',
    }
  }

  update(obj) {
    this.setState(obj);
  }
  
  render() {
    const state = this.state;
    const heading = [state.name, state.email, state.phone, state.location];
    return (
    <div className="App">
      <Form
        update={this.update}
        fields={[
          {name: 'name', default: this.state.name},
          {name: 'email', default: this.state.email},
          {name: 'phone', default: this.state.phone},
          {name: 'location', default: this.state.location},
        ]}
      />
      <Heading info={heading}/>
    </div>
  );}
}

export default App;
