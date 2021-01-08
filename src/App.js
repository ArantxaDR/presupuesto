import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";

function App() {
  //Definir el state
  const [estimate, saveEstimate] = useState(0);
  const [rest, saveRest] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);

  //Cuando se agregue un nuevo gasto
  const addNewExpense = (expense) => {
    saveExpenses([...expenses, expense]);
  };

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
                <Form addNewExpense={addNewExpense} />
              </div>

              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
