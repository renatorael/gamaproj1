import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://midias.gazetaonline.com.br/_midias/jpg/2017/11/20/black_2951013_960_720-5379677.jpg" className="App-logo" alt="logo" />
        <form>
          <input type="text" id="nome" class="input" placeholder="Nome Sobrenome" />
          <input type="email" id="email" placeholder="nome@email.com" />
          <input type="submit" id="enviar" value="Enviar" />
        </form>      
      </header>
    </div>
  );
}

export default App;
