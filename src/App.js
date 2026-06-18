import Description from './Components/Description';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="description">
        <div className="user">
          <h1>Guilherme Marian</h1>
        </div>
        
        <Description 
        text="Meu Nome é Guilherme Marian, atualmente possuo 17 anos de idade,
        Moro em Guaramirim - Santa Catarina; Estudo na escola CEDUP Perfeito Manoel de Aguiar." />

        <h3>Linguagens de Programação que Desejo Aprender:</h3>
        <ul>
          <li>C++</li>
          <li>Assembly</li>
          <li>PHP</li>
        </ul>

        <button><a href="https://github.com/guilherme-marian" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub" />GitHub</a></button>

      </div>
    </div>
  );
}

export default App;
