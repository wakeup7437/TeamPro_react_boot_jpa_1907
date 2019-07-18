import React from 'react';
import '../assets/css/App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function App() {
  const style ={
    background : '#2E9AFE'
    
}
  return (
    <div className="App" style={style}>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
