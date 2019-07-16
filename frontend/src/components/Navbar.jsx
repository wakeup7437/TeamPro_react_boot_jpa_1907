import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn ,MDBBtnGroup  } from "mdbreact";
import Jumbotron from './Jumbotron'
import "./Navbar.css"
import Login from '../containers/Login.jsx'
import Join from "../containers/Join.jsx";
 

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <Router>
    <MDBNavbar color="#0091ea light-blue accent-4" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">GC.KR</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
             <MDBNavLink to="/home">홈</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">챔피언 분석</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">통계</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">랭킹</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">게시판</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
    
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right  >
       
        <MDBBtn color="#ffebee red lighten-5" size="sm">
            <Link to="/login" >로그인</Link>
        </MDBBtn>
       
        <MDBBtn  color="#ffebee red lighten-5" size="sm">
            <Link to="/join" >회원가입</Link>
        </MDBBtn>
        
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    <Route path="/home" component={Jumbotron}/>
    <Route path="/login" component={Login}/>
    <Route path="/join" component={Join}/>
    </Router>
    );
  }
}

export default Navbar;