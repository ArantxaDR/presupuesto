import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  //Definir el state
  const [estimate, saveEstimate] = useState(0);
  const [rest, saveRest] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createexpense, saveCreateExpense] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
    if (createexpense) {
      //agrega nuevo presupuesto
      saveExpenses([...expenses, expense]);

      //resta del presupuesto alctual
      const restAmount = rest - expense.amount;
      saveRest(restAmount);
      //Resetear a false
      saveCreateExpense(false);
    }
  }, [createexpense, expense, expenses, rest]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {showquestion ? (
            <Question
              saveEstimate={saveEstimate}
              saveRest={saveRest}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>

              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl estimate={estimate} rest={rest} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
