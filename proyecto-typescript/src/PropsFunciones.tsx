import React from "react";

interface IPropsFuncionesProps {
  apellido: string;
}

export const PropsFunciones: React.FC<IPropsFuncionesProps> = (props) => {
  return (
    <>
      <p>{props.apellido}</p>
    </>
  );
};
