import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import logo from './images/GG_Pic.png';

const App = () =>{
  return (<section id='header'>
          <div>
            <img src={logo}/>
          </div>
        </section>);
}

ReactDom.render(<App/>, document.getElementById('root'));