import React from "react";
import PropsClases from "./PropsClases";

export default class Clases extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: "Luis",
      apellido: "Cascante",
      edad: 29,
      lista: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ nombre: "Juan", apellido: "Mendez" });
  //   }, 3000);
  // }

  handleChange(event) {
    console.log(event);
    this.setState({ nombre: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Hola, mi nombre es {this.state.nombre}</h1>
        <input
          type="text"
          value={this.state.nombre}
          // onChange={e => this.handleChange(e)}
          onChange={this.handleChange}
        />
        <PropsClases apellido={this.state.apellido} />
      </div>
    );
  }
}
