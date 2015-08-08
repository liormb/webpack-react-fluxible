/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 5:49 PM
 */

'use strict';

import React from 'react';
import { Route } from 'react-router';
import Main from 'components/Main';
import About from 'components/About';

const routes = (
    <Route handler={Main}>
        <Route name='about' handler={About} />
    </Route>
);

export default routes;