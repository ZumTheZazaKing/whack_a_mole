import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../data/context';

export function Main(){

    let { setGameStart, bgRef } = useContext(Context);

    const history = useHistory();

    const startGame = () => {
        history.push("/ingame");
        setGameStart(true);
        bgRef.current.play();
    }

    return (<div id="Main">
        <h1>Whack-A-Mole!</h1>
        <br/>
        <button onClick={() => startGame()}>Start</button>
    </div>)
}