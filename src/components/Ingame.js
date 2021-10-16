import { Mole } from "./Mole";
import { useEffect, useContext } from 'react';
import { Context } from "../data/context";
import { useHistory } from 'react-router-dom';

export function Ingame(){

    let { gameStart } = useContext(Context);

    const history = useHistory();

    useEffect(() => {
        if(!gameStart){
            history.push("/")
        }
    },[])

    const createHoles = () => {
        let holes = [];
        for(let i = 0; i < 9; i++){
            holes.push(<Mole bonk={bonk} key={i} moleNumber={i}/>)
        }
        return (<div id="Moles">
            { holes }
        </div>)
    }

    const bonk = e => {
        e.target.className = ""
    }

    return (<div id="Ingame">
        <p>Score: 0</p>
        { createHoles() }
    </div>)
}