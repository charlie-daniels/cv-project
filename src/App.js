import { Component } from "react";
import HeadingForm from "./components/form/HeadingForm";
import Heading from "./components/preview/Heading";

class App extends Component {
  constructor() {
    super();
    
    this.update = this.update.bind(this);

    this.state = {
      name: '',
      email: '',
      phone: '',
      location: '',
    }
  }

  update(obj) {
    this.setState(obj);
  }
  
  render() {
    return (
    <div className="App">
      <HeadingForm update={this.update}/>
      <Heading info={[this.state.name, this.state.email, this.state.phone, this.state.location]}/>
    </div>
  );}
}

export default App;
