import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

import { PropTypes } from 'prop-types'

function App({backgroundColor}) {

   return (
      <div style={{backgroundColor:`${backgroundColor}`}}>
         <BrowserRouter>
            <BaseLayout backgroundColor={backgroundColor}/>
         </BrowserRouter>
      </div>
   );
}



export default App;

App.prototype = {
   backgroundColor: PropTypes.string
}

