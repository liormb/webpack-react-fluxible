/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 4:52 PM
 */

'use strict';

import React from 'react';
import Router from 'react-router';
import FluxibleComponent from 'fluxible-addons-react/FluxibleComponent';
import createElement from 'fluxible-addons-react/createElementWithContext';
import app from './../app';

const context = app.createContext();

function RenderApp (context, Handler) {
    const Component = React.createFactory(Handler);

    React.render(
        React.createElement(
            FluxibleComponent,
            { context: context.getComponentContext() },
            Component()
        ),
        document.getElementById('content')
    );
}

Router.run(app.getComponent(), Router.HistoryLocation, (Handler, state) => {
    RenderApp(context, Handler);
});