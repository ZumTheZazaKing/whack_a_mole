import { useHistory } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../data/context";

export function Result(){

    let { score, setScore, gameStart, setGameStart, highScore, setHighScore } = useContext(Context);

    const history = useHistory();

    let highscoreNotiRef = useRef();

    useEffect(() => {
        if(!gameStart)history.push("/");
        if(score > highScore){
            highscoreNotiRef.current.className = "";
            localStorage.setItem("highscore", JSON.stringify(score));
        }
    },[])

    const returnToMain = () => {
        history.push("/");
        setScore(0);
        setGameStart(false);
    }

    const playAgain = () => {
        history.push("/ingame");
        setScore(0);
    }

    return (<div id="Result">
        <h2>Score: {score}</h2>
        <h3>High Score: {highScore > score ? highScore : score} <span className="hide" ref={highscoreNotiRef}>NEW</span></h3>
        <br/>
        <button id="playAgain" onClick={() => playAgain()}>Play Again</button>
        <br/><br/>
        <button id="return" onClick={() => returnToMain()}>Return to Menu</button>
    </div>)
}