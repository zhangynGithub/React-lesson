import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './form.css';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dept: "2",
            gender: "1",
            practise: true
        }
    }
    readImage(file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
            callback(e.target.result);
        };
        reader.readAsDataURL(file);
    }
    handleChange(e) {
        let itemName = e.currentTarget.name;
        let newState = {};
        if (itemName == "avatar") {
            this.readImage(e.currentTarget.files[0], url => {
                newState["avatarUrl"] = url;
                this.setState(newState)
            })
        } else {
            newState[itemName] = itemName == "practise" ? e.currentTarget.checked : e.currentTarget.value;
            this.setState(newState)
        }
    }
    handleSubmit(e){
        e.preventDefault();

        console.log(this.state)
    }
    render() {
        let genders = [{
            label : "男",
            value : 1
        },{
            label:"女",
            value:0
        }];
        return (
            <div>
                <form method="POST" target="sub" encType="multipart/form-data" onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>头像</label>
                        <div className="item-content">
                            <div className={"file-uploader " + (this.state.avatarUrl ? "uploaded" : "")}>
                                <img src={this.state.avatarUrl} width="150" height="150" />
                                <input type="file" name="avatar" onChange={this.handleChange.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>姓名</label>
                        <div className="item-content">
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div>
                        <label>部门</label>
                        <div className="item-content">
                            <select name="dept" value={this.state.dept} onChange={this.handleChange.bind(this)}>
                                <option value="1" >技术部</option>
                                <option value="2" >产品部</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>性别</label>
                        <div className="item-content">
                            {
                                genders.map((gender,i) =>{
                                    return <div key={i}><input type="radio" name="gender" value={gender.value} checked={this.state.gender == gender.value?true:false} onChange={this.handleChange.bind(this)} /><span>{gender.label}</span></div>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <label>实习生</label>
                        <div className="item-content">
                            <input type="checkbox" checked={this.state.practise} name="practise" onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div>
                        <div className="item-content">
                            <label>&nbsp;</label>
                            <input type="submit" value="提交" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

ReactDom.render(<FormComponent />, document.getElementById('app'))