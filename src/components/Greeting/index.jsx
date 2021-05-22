import { Component } from "react";

class Greeting extends Component {
  render() {
    const { name } = this.props;
    return <h1 className="heading">Hello, {name ?? "React"}</h1>;
  }
}

export default Greeting;
