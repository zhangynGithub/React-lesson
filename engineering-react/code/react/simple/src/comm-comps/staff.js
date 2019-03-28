import React,{Component} from 'react';
import './staff.css';

export default class Staff extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li className="staff">
                <span>{this.props.id}</span><span>{this.props.name}</span><span>{this.props.mobile}</span><span>{this.props.email}</span><a href="javascript:;" onClick={this.props.delCb.bind(this,this.props)}>删除</a>
            </li>
        )
    }
}