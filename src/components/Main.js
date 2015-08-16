/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 5:57 PM
 */

'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';

class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>Main Application Page</h1>
                <h3>Navigation Menu</h3>
                <ul className="">
                    <li className=""><Link to="/">Home Page</Link></li>
                    <li className=""><Link to="/about">About Page</Link></li>
                </ul>
                <hr />
                <RouteHandler {...this.props} />
            </div>
        );
    }
}

export default Main;