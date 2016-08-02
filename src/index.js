/**
 * Created by apple on 6/2/16.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureState from './store/configureStore'
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux'
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadCourses} from  './actions/courseActions'
import {loadAuthors} from  './actions/authorActions'

const store = configureState();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')

);
