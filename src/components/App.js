import { lazy, Suspense as Sus, useState} from 'react';
import { Context } from '../data/context';
import { HashRouter, Switch, Route } from 'react-router-dom';
 
const Main = lazy(() => import('./Main').then(module => ({default:module.Main})));
const Ingame = lazy(() => import('./Ingame').then(module => ({default:module.Ingame})));
const Result = lazy(() => import('./Result').then(module => ({default:module.Result})));

function App() {

  const [time, setTime] = useState(10000);
  const [minSpeedTime, setMinSpeedTime] = useState(200);
  const [maxSpeedTime, setMaxSpeedTime] = useState(1000);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <HashRouter>
      <div className="App">
      
        <Sus fallback={<h1>Loading...</h1>}>
          <Context.Provider value={{
            time, setTime,
            maxSpeedTime, setMaxSpeedTime,
            gameStart, setGameStart,
            minSpeedTime, setMinSpeedTime,
            score, setScore
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
        </Sus>

      </div>
    </HashRouter>
  );
}

export default App;
