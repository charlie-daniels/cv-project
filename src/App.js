import { Component } from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Experience from "./components/Experience";

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
      },
      experience: [
        {
          company: 'Tesla',
          date: '01/07/2003',
          role: 'Tech lead',
          details: [
            'Boosted productivity by 14% within the first quarter after hiring.',
            'Water fountain jargon extraordinaire.'
          ]
        },
        {
          company: 'Origin',
          date: '05/09/2010',
          role: 'Senior Engineer',
          details: [
            'Increased scamming potential by 213% after 3 years of service.',
          ]
        }
      ]
    }
  }

  update(key, val, sectionName) {
    this.setState(prevState => ({
      [sectionName]: {
        ...prevState[sectionName],
        [key]: val,
      }
    }));
  }
  
  render() {
    const heading = this.state.heading;
    const experience = this.state.experience;
    return (
      <div className="App">
        <Form
          update={this.update}
          fields={heading}
          name='heading'
        />
        <Heading info={heading}/>
        {experience.map((job) => (
          <Form
            update={this.update}
            fields={job}
            name='experience'
          />)
        )}
          <Experience info={experience}/>
      </div>
    );
  }
}

export default App;
