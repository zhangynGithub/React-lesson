import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// //html标签直接渲染
// let hello = <h1 className="h1">Hello World</h1>;

// //function创建Component，首字母要求大写
// function Hello(props) {
//     return <h1 className="h1">Hello {props.name}</h1>
// }

// //类继承React.Component
// class Hello1 extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return <h1 className="h1">Hello {this.props.name}</h1>
//     }
// }

// class HelloWorld extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "World"
//         }
//     }
//     render() {
//         let names = ["Jingang", "Qinjie", "Chengbo"];
//         let objs = [{ name: "Jingang" }, { name: "Qinjie" }, { name: "Chengbo" }];
//         return (
//             <div>
//                 <fieldset>
//                     <legend>数组遍历</legend>
//                     {
//                         names.map((name, i) => {
//                             return <Hello key={i} name={name} />
//                         })
//                     }
//                 </fieldset>

//                 <fieldset>
//                     <legend>对象遍历</legend>
//                     {
//                         Object.keys(objs).map((key, i) => {
//                             return <Hello key={i} name={objs[key].name} />
//                         })
//                     }
//                 </fieldset>
//             </div>
//         )
//     }
// }

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('app'))


// ReactDOM.render(hello, document.getElementById('app'))
// ReactDOM.render(<Hello name="Function Defined"/>,document.getElementById('app'))
// ReactDOM.render(<Hello1 name="Component Defined"/>,document.getElementById('app'))
// ReactDOM.render(<HelloWorld />,document.getElementById('app'))
