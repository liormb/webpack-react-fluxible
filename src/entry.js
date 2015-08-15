/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 4:52 PM
 */

'use strict';

import React from 'react';
import Router from 'react-router';
import { FluxibleComponent } from 'fluxible-addons-react';
import app from './../app';

const context = window.context = app.createContext();

Router.run(app.getComponent(), Router.HistoryLocation, (Handler, state) => {
    const Component = React.createFactory(Handler);

    React.render(
        React.createElement(
            FluxibleComponent,
            { context: context.getComponentContext() },
            Component()
        ), document.getElementById('content')
    );
});
