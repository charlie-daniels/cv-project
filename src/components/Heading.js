import { Component } from "react";

class Heading extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        {Object.values(this.props.info).map((val) => {
          return (<h1>{val}</h1>)
        })}
      </>
    )
  }
}

export default Heading;
