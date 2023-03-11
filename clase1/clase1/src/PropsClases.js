import PropTypes from "prop-types";
import React, { Component } from "react";

export default class PropsClases extends Component {
  render() {
    return <p>{this.props.apellido}</p>;
  }
}

PropsClases.propTypes = {
  apellido: PropTypes.string.isRequired,
};
