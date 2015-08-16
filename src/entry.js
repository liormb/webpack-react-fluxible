/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 4:52 PM
 */

'use strict';

import React from 'react';
import Router from 'react-router';
import { FluxibleComponent, createElementWithContext } from 'fluxible-addons-react';
import app from './../app';

const context = window.context = app.createContext();

Router.run(app.getComponent(), Router.HistoryLocation, (Handler, state) => {
    React.render(
        React.createElement(Handler, {
            context: context.getComponentContext()
        }), document.getElementById('content')
    );
});
