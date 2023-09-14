import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';

function App() {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState("");
  const [interim, setInterim] = useState("");
  const [completed, setCompleted] = useState(true);
  const change = (e) => {
    setMinutes(e.target.value);
    setInterim(e.target.value);
  }
  const pamadora = () => {
    setInterim("");
    let countS = 0;
    let countM = 0;
    let initial = 0;

    let constant1 = 60;
    let constant2 = minutes - 1;
    let intervalId = setInterval(() => {

      if (initial === 0) {
        setMinutes(minutes => minutes - 1)
        initial++
      }
      if (constant1 === 0 && constant2 === 0) {
        setCompleted(true);
        clearInterval(intervalId);
      }
      if (countS === 60) {
        setMinutes((minutes) => minutes - 1)
        countM++
        setSeconds(seconds => seconds = 60)
        countS = 0;
        constant1 = 60;
        constant2--
      } else {
        setSeconds(seconds => seconds - 1)
        constant1--
        countS++
      }
    }, 1000)
  }
  return (
    <div className="App">
      <div id="timerContainer">
        <div>{minutes === 60 || minutes < 0 ? "00" : minutes.toString().padStart(2, "0")} : {seconds === 60 ? "00" : seconds.toString().padStart(2, "0")}</div>
        {completed ? <div id = "main">
          <div id="message">Completed</div>
          <img id="one" src="https://futicons.com/icons/svg/interplanetary/outline/rocket_heavy.svg" />
          <img id="two" src="https://futicons.com/icons/svg/interplanetary/outline/rocket_heavy.svg" />
          <img id="three" src="https://futicons.com/icons/svg/interplanetary/outline/rocket_heavy.svg" />
        </div> : ""}
        <div id="form">
          <form>
            <button>reset</button>
          </form>
          <button onClick={pamadora}>start</button>
          <input onChange={change} type="number" value={interim} />
        </div>
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
