import React, { Fragment } from "react";
import { checkBudget } from "../helpers";

const BudgetControl = ({ estimate, rest }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: {estimate} €</div>

      <div className={checkBudget(estimate, rest)}>Resto: {rest} € </div>
    </Fragment>
  );
};

export default BudgetControl;
