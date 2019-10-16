import React, { Component } from 'react';
import './Navbar.css'
import Searchbar from './Searchbar';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './create.component';
import Edit from './edit.component';
import Index from './index.component';


class Header extends Component {
  render() {
    return (
      <div style={{width: "100%"}}>   
          <navbar className="navbar fixed-top" >
          <Searchbar />
            <div className='tile_div'>
              <Link to={'/'} className="nav-link"> <button type="button" class="btn btn-secondary">Home</button> </Link>
              <Link to={'/create'} className="nav-link"> <button type="button" class="btn btn-secondary">Create</button> </Link>
              <Link to={'/index'} className="nav-link"> <button type="button" class="btn btn-secondary">Index</button>  </Link>
              <Link to={"FileUpload"}  className="nav-link"> <button type="button" class="btn btn-secondary">FUpload </button>   </Link>
              <Link to={"Signin"}  className="nav-link"> <button type="button" class="btn btn-secondary">Signin</button>   </Link>
            </div>
          </navbar>
      
      </div>
    );
  }
}

export default Header;