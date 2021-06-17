import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import logo from './images/GG_Pic.png';

const Footer = () =>{
  return (<section id="footer">
            <div>
              <h1>This is footer</h1>
            </div>
        </section>);
}

const Header = () =>{
  return (
    <section id='header'>
          <div>
            <img src={logo}/>
          </div>
        </section>
  );
}
const App = () =>{
  return (<div>
          <Header/>
          <Footer/>
          </div>
      );
}

ReactDom.render(<App/>, document.getElementById('root'));