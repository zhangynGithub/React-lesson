import React, { Component } from 'react';
import Staff from './staff';
import axios from 'axios';
import eventProxy from './eventProxy';

export default class Staffs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: []
        }
    }
    fetchData(deptId){
        axios.get(`/api/users?deptid=${deptId}`).then(res =>{
            if(res.data.errcode == 0){
                this.setState({
                    staffs : res.data.data
                })
            }else{
                console.log(res.data.errmsg)
            }
        }).catch(err =>{
            console.log("获取数据失败")
        })
    }
    componentWillMount(){
        this.fetchData(this.props.initDeptId)
        eventProxy.on('deptChange',dept =>{
            this.fetchData(dept)
        })
    }
    delCallback(row){
        let staffs = this.state.staffs.filter(staff =>{
            return staff.id !== row.id
        })
        this.setState({
            staffs:staffs
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.staffs.map((staff, i) => {
                        return <Staff key={i} {...staff} delCb={this.delCallback.bind(this)} />
                    })
                }
            </ul>
        )
    }
}