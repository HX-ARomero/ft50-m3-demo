import { Component } from "react";

export default class ClassDisplay extends Component {

  componentDidMount() {
    //* Petición al Back de los turnos
    console.log("ClassDisplay se montó al DOM");
  }

  componentWillUnmount() {
    console.log("ClassDisplay se desmontará!!!")
  }

  render() { 
    return (
      <div style={{backgroundColor: "grey"}}>
        <h3>Class Display</h3>
      </div>
    );
  }
}
