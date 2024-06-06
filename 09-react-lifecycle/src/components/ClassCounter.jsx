import { Component } from "react";
import ClassDisplay from "./ClassDisplay";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    //* Declarar estado:
    this.state = {
      contador: 0,
      user: "Homero",
    };
  }

  componentDidUpdate() {
    //* GET /appointments
    console.log("ClassCounter se actualizó");
  }

  sumaUno = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador de Clase</h2>
        <h3>Contador: {this.state.contador}</h3>
        <button onClick={this.sumaUno}>Suma 1</button>
        {this.state.contador > 2 && this.state.contador < 5 ? (
          <ClassDisplay />
        ) : null}
      </div>
    );
  }
}
