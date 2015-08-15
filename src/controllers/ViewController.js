/**
 * User: Lior Elrom
 * Date: 08/09/15
 * Time: 1:00 PM
 */

'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import UIStore from './../stores/UIStore';
import Main from './../components/Main';

class ViewController extends React.Component {
    render() {
        return (
            <Main {...this.props} />
        );
    }
}

ViewController.propTypes = {
    context: React.PropTypes.any.isRequired,
    model: React.PropTypes.object
};

ViewController.defaultProps = {
    context: {},
    model: {}
};

ViewController = connectToStores(ViewController, [UIStore], (context, props) => {
    return {
        model: context.getStore(UIStore).model
    };
});

ViewController = provideContext(ViewController);

export default ViewController;