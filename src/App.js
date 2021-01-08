import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";

function App() {
  //Definir el state
  const [estimate, saveEstimate] = useState(0);
  const [rest, saveRest] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Question saveEstimate={saveEstimate} saveRest={saveRest} />
          <div className="row">
            <div className="one-half column">
              <Form />
            </div>

            <div className="one-half column">2</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
