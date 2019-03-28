import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import './demo.css';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/child1">Child1</Link>
            <Link to="/child2">Child2</Link>
        </nav>
    )
}

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home Component</h3>
            </div>
        )
    }
}

class Child1 extends Component {
    render() {
        return (
            <div>
                <h3>Child1 Component</h3>
            </div>
        )
    }
}

class Child2 extends Component {
    render() {
        return (
            <div>
                <h3>Child2 Component</h3>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    (<HashRouter>
        <div>
            <App>
                <Route exact path="/" component={Home} />
                <Route path="/child1" component={Child1} />
                <Route path="/child2" component={Child2} />
            </App>
        </div>
    </HashRouter>),
    document.getElementById('root')
);