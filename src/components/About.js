/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 6:04 PM
 */

'use strict';

import React from 'react';
//import Fluxible from 'fluxible';
//import AboutStore from 'stores/AboutStore';

class About extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: this.props.name
        };
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.onChange} />
                <h1>Welcome to {this.props.name} About Page</h1>
            </div>
        );
    }

    onChange (event) {
        this.setState({
            name: event.target.value
        });
    }
}

export default About;