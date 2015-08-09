/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 4:52 PM
 */

'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, (Root, state) => {
    React.render(<Root {...state} />, document.getElementById('content'));
});