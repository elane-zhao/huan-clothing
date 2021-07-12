import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';

const HatsPage = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
      <button onClick={() => props.history.push('/hats/12')}>
        To HAT 12 button
      </button>
      {/* props.match.url makes dynamic routing possible, increase reusability */}
      <Link to={`${props.match.url}/17`}>To HAT 17</Link>
    </div>
  );
};
const HatDetailPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HAT Detail PAGE: {props.match.params.hatId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <Link to="/hats">To hats</Link> */}

      {/* inside <Switch> component, as long as we find one satisfied route, all other following matched routes will be ignored */}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        {/* path match check 的时候是从前到后 如果path是/shop/hats 不会 match /hats */}
        <Route path="/shop/hats" component={HatsPage}></Route>
        {/* <Route path="/hats/:hatId" component={HatDetailPage}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
