import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ saveExpense, saveCreateExpense }) => {
  const [name, saveName] = useState("");
  const [amount, saveAmount] = useState();
  const [error, saveError] = useState(false);

  //Usuario agrega gasto
  const addBudget = (e) => {
    e.preventDefault();

    //validar
    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    //construir el gasto
    const expense = {
      name,
      amount,
      id: shortid.generate(),
    };
    console.log(expense);
    //pasar el gasto al componente principal
    saveExpense(expense);
    saveCreateExpense(true);
    //resetear el form
    saveName("");
    saveAmount(0);
  };
  return (
    <form onSubmit={addBudget}>
      <h2>Introduce tus gastos</h2>
      {error ? <Error message="Ambos campos son obligatorios" /> : null}
      <div className="campo">
        <label>Tipo de gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={amount}
          onChange={(e) => saveAmount(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value=" Agregar gasto"
      />
    </form>
  );
};

export default Form;
