import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'

import App from './App';

import { BoardsComponent } from './boards/boards.component';

import './index.css';


import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter>
  <div>
  <Route exact={true} path="/" component={App}/>
  <Route path="/boards" component={BoardsComponent}/> 
  
    
  </div>
    
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
