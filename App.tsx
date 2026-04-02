import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);


  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="container">

      <h1>React Clicler</h1>

      <div className="card">

        <p style={{ color: count >= 10 ? '#4caf50' : '#fff', fontWeight: 'bold' }}> Você clicou {count} vezes!</p>

        <button onClick={handleIncrement}>

          Clique aqui
  
      </button>

        <button onClick={() => setCount(0)} className="reset-bnt">Zerar</button>
        {count >= 10 && (
          <div className="image-container">
            <img
              src="https://opensource.fb.com/img/projects/react.jpg" 
            alt="Conquista alcançada"
        style={{ marginTop: '20px', borderRadius: '8px' }}/>
          </div>

        )}
      </div>
    </div>
  )
}

export default App