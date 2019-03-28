import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TimeApp extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps",newProps)
    }
    render() {
        let date = new Date(this.props.time);
        return <strong>{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</strong>
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowTime: Date.now()
        }
    }
    handleClick() {
        this.getTime()
    }
    getTime() {
        this.setState({
            nowTime: Date.now()
        })
    }
    componentWillMount() {
        console.log('componentWillMount', "button:", document.getElementById('button'))
    }
    componentDidMount() {
        console.log('componentDidMount', "button:", document.getElementById('button'))
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <TimeApp time={this.state.nowTime} /><br />
                <button id="button" onClick={this.handleClick.bind(this)}>获取时间</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))