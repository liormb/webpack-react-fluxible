/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 5:57 PM
 */

'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';

class Main extends React.Component {
    render () {
        return (
            <div>
                <h1>Main Page</h1>
                <Link to="about">About Page</Link>
                <RouteHandler />
            </div>
        );
    }
}

export default Main;