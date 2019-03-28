import React,{Component} from 'react';
import './depts.css';
import eventProxy from './eventProxy';

export default class Depts extends Component{
    constructor(props){
        super(props);
        this.state = {
            depts :[{
                id:1,
                name :"技术部"
            },{
                id:2,
                name :"产品部"
            }],
            curDeptId:props.initDeptId
        }
    }
    handleDeptsChange(deptId){
        this.setState({
            curDeptId:deptId
        })
        eventProxy.trigger('deptChange',deptId);
    }
    render(){
        return (
            <div className="depts">
                {
                    this.state.depts.map((dept,i) =>{
                        return <a className={dept.id == this.state.curDeptId?"active":""} key={i} href="javascript:;" onClick={this.handleDeptsChange.bind(this,dept.id)}>{dept.name}</a>
                    })
                }
            </div>
        )
    }
}