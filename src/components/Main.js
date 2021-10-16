import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../data/context';

export function Main(){

    let { setGameStart } = useContext(Context);

    const history = useHistory();

    const startGame = () => {
        history.push("/ingame");
        setGameStart(true)
    }

    return (<div id="Main">
        <h1>Main</h1>
        <button onClick={() => startGame()}>Start</button>
    </div>)
}