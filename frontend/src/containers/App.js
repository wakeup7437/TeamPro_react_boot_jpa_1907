import React, {Component} from 'react';
import '../assets/css/App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const style ={
  background : '#2E9AFE'
  
}

class App extends Component {

  constructor(){
    super()
    this.state = {current:'AAA'}
  }

  changeCurrent = () => {
    this.setState({
      current:"BBB2"

    })
  }

  render() {
    return (
      <div className="App" style={style} >
        <Navbar current={this.state.current} change={this.changeCurrent}/>
        <Footer current={this.state.current}/>
      </div>
    );
  }  
}

export default App;
