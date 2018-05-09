import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'

import App from './App';
import Dashboard from './Dashboard';

import './index.css';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter>
  <div>
  <Route exact path="/" component={App}/>
  <Route path="/dashboard" component={Dashboard}/> 
  
    
  </div>
    
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
