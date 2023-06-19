import "./Dice.module.css";
import { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

export default function Dice() {
  const [diceNumber, setDiceNumber] = useState(emptyDice);

  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];

  function girarDado() {
    setDiceNumber(emptyDice);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const rutaImagen = diceArr[randomNumber - 1];
      setDiceNumber(rutaImagen);
    }, 500);
  }

  return (
    <div className="diceContainer">
      <img
        style={{ width: "300px" }}
        src={diceNumber}
        alt="dice image"
        onClick={girarDado}
      />
    </div>
  );
}
