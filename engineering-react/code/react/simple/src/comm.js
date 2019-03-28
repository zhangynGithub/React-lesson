// http://mock.sysware.com.cn/mock/14/api/users
import React,{Component} from 'react';
import ReactDom from 'react-dom';

import './comm.css'
import Staffs from './comm-comps/staffs';
import Depts from './comm-comps/depts';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initDeptId : "2"
        }
    }
    render() {
        return (
            <div>
                <Depts initDeptId={this.state.initDeptId}/>
                <Staffs initDeptId={this.state.initDeptId} />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))