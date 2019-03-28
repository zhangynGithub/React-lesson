import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from "proptypes";

import './index.css'

class Home extends Component{
    render(){
        return <div><h2>This is HomePage</h2></div>
    }
}

class Page1 extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log(this.props.match.params)
    }
    render(){
        return <div><h2>This is Page1</h2></div>
    }
}

class Page2 extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log(this.props.location.search)
    }
    render(){
        return <div><h2>This is Page2</h2></div>
    }
}

class Login extends Component{
    handleLogin(){
        localStorage.login = 1;
        this.context.router.history.push("/")
    }
    render(){
        return <div><h2>This is loginPage</h2><div><button onClick={this.handleLogin.bind(this)}>Login</button></div></div>
    }
}

Login.contextTypes = { 
    router: PropTypes.object.isRequired 
    }

class Page404 extends Component{
    render(){
        return <div><h2>This is Page404</h2></div>
    }
}

function NavBar() {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>&nbsp;&nbsp;
            <NavLink to="/page1/111">Page1</NavLink>&nbsp;&nbsp;
            <NavLink to={{
                pathname: '/page2',
                search: '?sort=name',
                state: { price: 18 }
            }}>Page2</NavLink>&nbsp;&nbsp;
            <NavLink to="/fadfsaf">404</NavLink>
        </div>
    )
}

// 登录验证
function requireAuth(Layout, props) {
    let isLogined = localStorage.login;
    if (!isLogined) {
      return <Redirect to="/login" />;
    } else {
      return <Layout {...props} />
    }
  }

ReactDom.render((
    <Router >
        <div>
            <h1>路由demo</h1>
            <NavBar />
            <Switch>
                <Route exact path="/" component={props => requireAuth(Home, props)} />
                <Route path="/page1/:id" component={props => requireAuth(Page1, props)} />
                <Route path="/page2" component={props => requireAuth(Page2, props)}/>
                <Route path="/login" component={Login} />
                <Route component={Page404} />
            </Switch>
        </div>
    </Router>
), document.getElementById('app'))