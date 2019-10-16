import React, { Component } from 'react'
import './Signin.css'
export default class Signin extends Component {


  constructor(props){
    super(props);
    this.state={
      title: 'LOGIN PAGE',
      act: 0,
      index: '',
      datas: []
    }

    
    
  } 

  componentDidMount(){
    this.refs.email.focus();
  }

  fLogin = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let email = this.refs.email.value;
    let password = "";

    if(this.state.act === 0){   //new
      let data = {
        email, password
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].email = email;
      datas[index].password = password;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.email.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.email.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.email.value = data.email;
 

    this.setState({
      act: 1,
      index: i
    });

    this.refs.email.focus();
  }  


  render() {
    let datas = this.state.datas;
    return (
     <div className="total">
      <div className="App">
    <h3>{this.state.title}</h3>
    <form ref="myForm" className="myForm">
      <input type="text" ref="email" placeholder="your email" className="formField" />
      <input type="password" placeholder="your password" className="formField" />
      <button onClick={(e)=>this.fLogin(e)} className="myButton">LOGIN </button>
    </form>
    <pre>
      {datas.map((data, i) =>
        <li key={i} className="myList">
          {i+1}. {data.email}, {data.password}
          <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
          <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
        </li>
      )}
    </pre>
  </div>
  </div>
      )
  }
}