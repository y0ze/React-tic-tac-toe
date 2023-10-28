import './NavBar.css';
export default function NavBar() {
  return (
    <div>
    <ul class="navUl">
      <img src="img\logo2.png"></img> 
      <li onclick="onGameTypeSelected('easy')"><a>Small</a></li>
      <li onclick="onGameTypeSelected('medium')"><a>Medium</a></li>
      <li onclick="onGameTypeSelected('hard')"><a>Large</a></li>
      <li onclick="playAgain()"><a>Reset table</a>
      </li>
    </ul>
    </div>
  );
}
