import { lazy, Suspense as Sus, useState, useRef} from 'react';
import { Context } from '../data/context';
import { HashRouter, Switch, Route } from 'react-router-dom';
import bgmusic from '../audio/bgmusic.mp3';
 
const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Ingame = lazy(() => import('./Ingame').then(module => ({default:module.Ingame})));
const Result = lazy(() => import('./Result').then(module => ({default:module.Result})));

function App() {

  const [time, setTime] = useState(20000);
  const [minSpeedTime, setMinSpeedTime] = useState(200);
  const [maxSpeedTime, setMaxSpeedTime] = useState(1000);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);

  const bgRef = useRef();

  return (
    <HashRouter>
      <div className="App">
      
        <Sus fallback={<div id="loading"><h1>Loading...</h1></div>}>
          <Context.Provider value={{
            time, setTime,
            maxSpeedTime, setMaxSpeedTime,
            gameStart, setGameStart,
            minSpeedTime, setMinSpeedTime,
            score, setScore,
            bgRef
          }}>
            <Switch>

              <Route exact path="/">
                <Main/>
              </Route>

              <Route exact path="/ingame">
                <Ingame/>
              </Route>

              <Route exact path="/result">
                <Result/>
              </Route>

            </Switch>
          </Context.Provider>

          <audio src={bgmusic} ref={bgRef} autoPlay loop/>
        </Sus>

      </div>
    </HashRouter>
  );
}

export default App;
