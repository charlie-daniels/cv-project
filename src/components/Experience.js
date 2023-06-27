import { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super();
  }

  render() {
    const jobs = this.props.info;
    return (
      <>
        <h2>Work Experience</h2>
        {jobs.map((job) => {
          return (
            <div>
              <h3>
                <span>{job.company}</span><span>{job.date}</span>
              </h3>
              <h4>{job.role}</h4>
              <ul>
                {job.details.map((detail) => <li>{detail}</li>)}
              </ul>
            </div>
          )
        })}
      </>
    );
  }
}

export default Experience;