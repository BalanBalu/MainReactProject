import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './Header/Signin';
import FileUpload from './Header/file.component'
import Header from './Header/Navbar';
import Create from './Header/create.component'
import Edit from './Header/edit.component';
import Index from './Header/index.component'
//import ImageZoom from './components/ImageZoom';

class App extends Component {
  render() {
    return (
    <div>
      <Router>
    
     <div>
         <Header/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        
       
 
         
      <Switch>
             <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
               <Route path="/Signin" component={Signin}/>
               <Route path='/FileUpload' component={FileUpload}/>
    </Switch> 
   
      
     
      </div>
         
      </Router> 
      </div>
    );
  }
}

export default App;