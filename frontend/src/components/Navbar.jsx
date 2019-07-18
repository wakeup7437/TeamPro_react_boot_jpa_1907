import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn ,MDBBtnGroup  } from "mdbreact";
import Board from '../containers/Board'
import Jumbotron from './Jumbotron'
import "./Navbar.css"
import Join from "../containers/Join.jsx";
import Mypage from "../containers/Mypage.jsx";
import Login from "../containers/Login.jsx"

 

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      login: false,
      check: localStorage.getItem('uno'),

    };
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}


  /* componentWillMount = () => {
    if (localStorage.getItem('uno')) {
      this.setState({
        login:true
      }) 
    } else{
        this.setState({
          login:false
      }) 
    }
  } */



render() {
  console.log('hi')
const bstyle={
  padding:"13.44px 25px"
}
const astyle={
  padding:0,
}

  return (
    <Router >
    <div style={{height : 120 }}></div>
    <MDBNavbar color="#0091ea light-blue accent-4 fixed-top" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">GC.KR</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
             <MDBNavLink to="/">홈</MDBNavLink>
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
            <MDBNavLink to="/board">게시판</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
            {this.state.check ? 
          <MDBBtnGroup>   
            <MDBBtn  color="blue" style={astyle}>
            <MDBNavLink to="/Mypage" style={bstyle}>마이페이지</MDBNavLink>
            </MDBBtn>
            <MDBDropdown >
              <MDBDropdownToggle caret color="yellow"/>
              <MDBDropdownMenu >
                <MDBDropdownItem >
                <MDBNavLink to="/mypage" color="yellow">로그아웃</MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                <MDBNavLink to="/mypage">마이페이지</MDBNavLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBBtnGroup> 
          : 
          <MDBBtnGroup>
            <MDBBtn  color="blue" style={astyle}>
           {localStorage.clear()}
            <MDBNavLink to="/login" style={bstyle}>로그인</MDBNavLink>
            </MDBBtn>
          </MDBBtnGroup>} 
            
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    <Route path="/" exact component={Jumbotron}/>
    <Route path="/login" component={Login} />
    <Route path="/join" component={Join}/>
    <Route path="/board" component={Board}/>
    <Route path="/mypage" component={Mypage}/>
    </Router>
    );
  }
}

export default Navbar;