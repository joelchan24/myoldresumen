import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
import Navigation from './components/navigation';
import Header from './components/header';
import Languajes from './components/languajes'
import Portfolio from './components/portfolio';
class App extends React.Component{
  render(){
  return(
    <div>
    <Navigation logoTitle="Portfolio" />
    <Header title="Hello Welcome"/>
    <Languajes/>
    <Portfolio/>
    </div>
  )

  }
}



ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

