import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ saveEstimate, saveRest, updateQuestion }) => {
  //Definir el state
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  //Funcion que lee el presupuesto
  const defineBudget = (e) => {
    saveAmount(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const addingBudget = (e) => {
    e.preventDefault();

    //Validar
    if (amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }

    //Si pasa la validación
    saveError(false);
    saveRest(amount);
    saveEstimate(amount);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>Añade tu presupuesto</h2>

      {error ? <Error message="Cantidad no válida" /> : null}

      <form onSubmit={addingBudget}>
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

Question.propTypes = {
  saveEstimate: PropTypes.func.isRequired,
  saveRest: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
};
export default Question;
