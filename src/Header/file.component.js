import React, { Component } from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom'
import './file.component.css';
import axios from 'axios'


class FileUpload extends Component {
    constructor(props){
        super(props);
            this.state={
                selectedFile: null
            }
        
    }
    fileSelectHandler = event =>{
      this.setState({
        selectedFile: event.target.files[0]
      })
    }
    onUploadHandler=()=>{
const fd = new FormData();
fd.append('image',this.state.selectedFile,this.state.selectedFile.name)
axios.post('http://localhost:4000/business/add',fd)
.then(res=>{
  console.log(res)
})
    }

  render() {
    return (
       
      <div className='App'>
       <h1>File Upload</h1>
       <input type='file' onChange={this.fileSelectHandler}/>
       <button onClick={this.onUploadHandler}>Upload</button>
    </div>

    );
  }
}

export default FileUpload;