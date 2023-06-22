import { Component } from "react";
import HeadingForm from "./components/form/HeadingForm";
import Heading from "./components/preview/Heading";

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
      <HeadingForm update={this.update} defaults={heading}/>
      <Heading info={heading}/>
    </div>
  );}
}

export default App;
