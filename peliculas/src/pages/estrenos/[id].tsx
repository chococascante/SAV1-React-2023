import { useRouter } from "next/router";
import React from "react";

const EstrenoPorId = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Pelicula con id: {id}</div>;
};

export default EstrenoPorId;
