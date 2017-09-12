import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import List from './components/List';
import Single from './components/Single'


ReactDOM.render(
<div>
  <Router>
    <div>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/Single/:id" component={Single} />
        </Switch>
      </div>
  </Router>
</div>
  , document.getElementById('root'));
registerServiceWorker();
