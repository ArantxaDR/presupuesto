import React, { Fragment } from "react";
import { checkBudget } from "../helpers";
import PropTypes from "prop-types";

const BudgetControl = ({ estimate, rest }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: {estimate} €</div>

      <div className={checkBudget(estimate, rest)}>Resto: {rest} € </div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  estimate: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
};
export default BudgetControl;
