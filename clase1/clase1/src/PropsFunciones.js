import React from "react";
import PropTypes from "prop-types";

export default function PropsFunciones({ apellido }) {
  return (
    <div>
      <p>{apellido}</p>
    </div>
  );
}

PropsFunciones.propTypes = {
  apellido: PropTypes.string,
};
