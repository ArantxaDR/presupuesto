import React, { Fragment, useState } from "react";

const Question = () => {
  //Definir el state
  const [amount, saveAmount] = useState(0);

  //Funcion que lee el presupuesto
  const defineBudget = (e) => {
    saveAmount(parseInt(e.target.value, 10));

    //Submit para definir el presupuesto
    const addSubmit = (e) => {
      e.preventDefault();

      //Validar
    };
  };
  return (
    <Fragment>
      <h2>Añade tu presupuesto</h2>
      <form>
        onSubmit={addBudget}
        <input
          type="number"
          className="u-full-width"
          placeholder="Añade tu presupuesto"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Añadir cantidad"
        />
      </form>
    </Fragment>
  );
};

export default Question;
