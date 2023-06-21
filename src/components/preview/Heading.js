import { Component } from "react";

class Heading extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        {this.props.info.map((i) => {
          return (<h1>{i}</h1>)
        })}
      </>
    )
  }
}

export default Heading;
