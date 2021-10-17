import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../data/context";

export function Result(){

    let { score, setScore, gameStart, setGameStart } = useContext(Context);

    const history = useHistory();

    useEffect(() => {
        if(!gameStart)history.push("/");
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
        <button onClick={() => playAgain()}>Play Again</button>
        <button onClick={() => returnToMain()}>Return to Menu</button>
    </div>)
}