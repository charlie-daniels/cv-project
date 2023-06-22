import { Component } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    
    this.update = this.update.bind(this);

    this.state = {
      heading: {
        name: 'John Appleseed',
        email: 'j.appleseed@apple.com',
        phone: '0773 457 1263',
        location: 'London, UK',
      }
    }
  }

  update(obj) {
    this.setState(obj);
  }
  
  render() {
    const heading = this.state.heading;
    return (
    <div className="App">
      <Form
        update={this.update}
        fields={[
          {name: 'name', default: heading.name},
          {name: 'email', default: heading.email},
          {name: 'phone', default: heading.phone},
          {name: 'location', default: heading.location},
        ]}
      />
      <Heading info={this.state.heading}/>
    </div>
  );}
}

export default App;
