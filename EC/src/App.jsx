import { useState } from 'react'
import './App.css'

function App() {
  const [miText, setMiTexto] = useState ('')
  const handleText = (event) =>{
  setMiTexto(event.target.value)

  }

      return (
        <div>
          <div>
            <p>ingrese el texto :</p>
          </div>
          <input type="text" onChange={handleText} value={miText} />
          <h3>Su Texto</h3>
          <p>
            {miText}
          </p>
        </div>
    );

      }

 
export default App