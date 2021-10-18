import { Mole } from "./Mole";
import { useEffect, useContext, useRef } from 'react';
import { Context } from "../data/context";
import { useHistory } from 'react-router-dom';

export function Ingame(){

    let { gameStart, time, minSpeedTime, maxSpeedTime, score, setScore } = useContext(Context);

    const history = useHistory();

    let peepTimer;

    const mole0 = useRef();
    const mole1 = useRef();
    const mole2 = useRef();
    const mole3 = useRef();
    const mole4 = useRef();
    const mole5 = useRef();
    const mole6 = useRef();
    const mole7 = useRef();
    const mole8 = useRef();

    let moleRefs = [mole0, mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8];


    //Check out gameStart for return
    useEffect(() => {
        if(!gameStart){
            history.push("/")
        }
    },[])

    //Check out gameStart to start process
    useEffect(() => {
        if(!gameStart){
            return
        }

        peep();

        let endTimer = setTimeout(() => {history.push("/result")}, time);

        return () => {
            clearTimeout(endTimer);
            clearTimeout(peepTimer)
        }
    }, [])


    const randomTime = () => {
        return Math.round(Math.random()*(maxSpeedTime - minSpeedTime)+minSpeedTime)
    }

    const randomMole = () => {
        return Math.floor(Math.random()*moleRefs.length);
    }

    const peep = () => {
        const speed = randomTime();
        const mole = moleRefs[randomMole()];

        mole.current.className = "inner";

        peepTimer = setTimeout(() => {
            mole.current.className += " hidden";

            if(gameStart){
                peep()
            }
        },speed)
    }

    const bonk = e => {
        e.target.className += " hidden";
        setScore(score++);
    }

    return (<div id="Ingame">
        <p id="score">Score: {score}</p>
        <div id="Moles">
            { moleRefs && moleRefs.map((moleRef,i) => <Mole ref={moleRefs[i]} bonk={bonk} key={i} moleNumber={i}/>)}
        </div>
    </div>)
}