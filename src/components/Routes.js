/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 5:49 PM
 */

'use strict';

import React from 'react';
import { DefaultRoute, Route } from 'react-router';
import Main from './Main';
import About from './About';

const Routes = (
    <Route name="app" path="/" handler={Main}>
        <Route name="about" handler={About} />
    </Route>
);

export default Routes;