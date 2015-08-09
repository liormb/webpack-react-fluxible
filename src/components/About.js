/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 6:04 PM
 */

'use strict';

import React from 'react';

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
                <h1>Welcome to {this.props.name} About Page</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." value={this.state.name} onChange={this.onChange} />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.submitHandler}>Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChange (event) {
        this.setState({
            name: event.target.value
        });
    }

    submitHandler () {
        console.log('submit!');
        debugger;
    }
}

export default About;