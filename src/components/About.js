/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 6:04 PM
 */

'use strict';

import React from 'react';
import userActions from './../actions/userActions';

class About extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render () {
        return (
            <div>
                <h3>About Page</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." value={this.state.name} onChange={this.handleChange} />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.onClick.bind(this)}>Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    onClick (event) {
        event.preventDefault();
        this.props.context.executeAction(userActions.changeName, {
            name: this.state.name
        });
    }
}

export default About;