import React, { Component } from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom'
import './Dropdown.css'




class Dropdown extends Component {
  render() {
    return (
       
      <div className='dropdown'>
        <img src="https://img.icons8.com/ios/48/000000/shopping-cart-filled.png"></img>
        
        <button className='btn'><Link to='/stores'><h7 style={{color:   'white'}}>Take My Basket </h7></Link></button>
       
    </div>

    );
  }
}

export default Dropdown;