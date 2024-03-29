﻿import Button from "../Button";
import { useState } from "react";

const Card = () => {
  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Remover() {
    setValor(valor - 1);
  }

  return (
    <div className="card">
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <Button className="btn btn-success" onClick={Adicionar}>
          Adicionar
        </Button>
        <Button className="btn btn-danger" onClick={Remover}>
          Remover
        </Button>
        <p>{valor}</p>
      </div>
    </div>
  );
};
export default Card;
