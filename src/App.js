import './App.css';
import NavBar from './components/NavBar/NavBar';
import GameMenu from './components/GameMenu/GameMenu';
import Board from './components/Board/Board';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Board size={3}/>
    </div>
  );
}

export default App;
