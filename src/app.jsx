import { useState } from 'react';
import { Router, Route, browserHistory } from "react-router";

const history = browserHistory;

const Abc = (props) => {
  console.log("PROPS", props);

  return <div>4344</div>
};

const routes = (state) => {
  console.log("state2", state);
  
  return (
    <div>
        <Route
            path="/"
            component={() => <Abc isABC={state} />}
        />
    </div>
  )
}

const App = () => {
  const [state, setState] = useState(false);

  console.log("state1", state);
  return (
    <div>
      <button onClick={() => { setState((ps) => !ps) }}>111</button>
      <Router history={history}>
        {routes(state)}
      </Router>
    </div>
  )
};

export default App;
