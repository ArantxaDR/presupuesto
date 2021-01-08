import React, { useState } from "react";

const Form = () => {
  return (
    <form>
      <h2>Introduce tus gastos</h2>
      <div className="campo">
        <label>Tipo de gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
        />
      </div>
      <div className="campo">
        <label>Cantidad</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" />
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
