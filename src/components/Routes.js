/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 5:49 PM
 */

'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import ViewController from './../controllers/ViewController';
import Main from './Main';
import Home from './Home';
import About from './About';

const Routes = (
    <Route name="app" path="/" handler={ViewController}>
        <DefaultRoute name="home" handler={Home} />
        <Route name="about" handler={About} />
    </Route>
);

export default Routes;