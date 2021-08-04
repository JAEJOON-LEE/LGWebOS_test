import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React from 'react'; 
import Main from './main'
import WebCam from './webcam';

const cors = require('cors');

app.use(cors());

function App() { 
  return ( 
    <> 
    <Router> 
      <Route exact path='/' component={Main} /> 
      <Route path='/webcam/:name' component={WebCam} /> 
    </Router> 
    </> 
    ); 
  } 
    export default App;
