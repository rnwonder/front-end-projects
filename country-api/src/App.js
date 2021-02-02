import React from 'react';
import './App.css';
import Top from './components/Top'
import ListContainer from './components/ListContainer'
import MoreInfo from './components/MoreInfo'
import {IsoProvider} from './components/IsoContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div id="main">
        <Top />
        <IsoProvider>
          <Switch>
            <Route path="/" exact component={ListContainer} />
            <Route path='/more/:name' exact component={MoreInfo} />
          </Switch>
        </IsoProvider>

      </div>
    </Router>
  );
}

export default App;
