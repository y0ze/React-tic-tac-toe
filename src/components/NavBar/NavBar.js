import './NavBar.css';
export default function NavBar(props) {
  const { onGameRestarted } = props;
  return (
    <div>
    <ul class="navUl">
      <img src="img\logo2.png"></img> 
      <li onClick={onGameRestarted}><a>Restart Game</a>
      </li>
    </ul>
    </div>
  );
}
