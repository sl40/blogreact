import { Router, Route, Link } from 'react-router'
import React, {Component} from 'react';

class Test extends Component {
    render() {
        return(
        <Router history={hashHistory}>
            <Route path="/" component={Test}/>
        </Router>
        )
    }
}