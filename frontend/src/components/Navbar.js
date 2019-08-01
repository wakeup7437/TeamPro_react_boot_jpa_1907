import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn ,MDBBtnGroup  } from "mdbreact";
import Board from '../containers/Board'
import Jumbotron from './Jumbotron.js'
import "./Navbar.css"
import Join from "../containers/Join.jsx";
import Mypage from "../containers/Mypage.js";
import Login from "../containers/Login.jsx"
import passChange from "../containers/passChange"
import DelUser from '../containers/DelUser'
import BoardDetail from "../containers/BoardDetail";
import {login,logout} from '../actions'
import {connect} from 'react-redux'
import BoardModify from "../containers/BoardModify";
import BoardWrite from "../containers/BoardWrite";
import Statistics from "../containers/Statistics"
import SearchSummoner from './SearchSummoner'


class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      login: false,
      check: sessionStorage.getItem('uno'),

    };
  }

//로그인 검사 x  로그인 프로세스 o loginProc같은 이름으로 더 명확하게
isLogin=(props)=>{
  sessionStorage.getItem('uno')
  this.setState({
    check : true
  })
  console.dir(this.props)
  
  this.props.dispatch(login({
    userName:sessionStorage.getItem('userName'),
    uno:sessionStorage.getItem('uno')
  }))
}
passwordCheck(e){
  this.setState({pCheck: e.target.value})
}
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

isLogout=()=>{
  sessionStorage.clear();
  this.setState({
    check : false
  })
  this.props.dispatch(logout())
}
  

render() {
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
            <MDBNavLink to="/statistics">챔피언 목록</MDBNavLink>
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
            <MDBNavLink to="/Mypage" style={bstyle}>{sessionStorage.getItem('userName')} 님</MDBNavLink>
            </MDBBtn>
            <MDBDropdown >
              <MDBDropdownToggle caret color="yellow"/>
              <MDBDropdownMenu >
                <MDBDropdownItem >
                <MDBNavLink to="/" onClick={this.isLogout}>로그아웃</MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                <MDBNavLink to="/mypage">마이페이지</MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                <MDBNavLink to="/passChange">비밀번호 변경</MDBNavLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                <MDBNavLink to="/delUser">회원 탈퇴</MDBNavLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBBtnGroup> 
          : 
          <MDBBtnGroup>
            <MDBBtn  color="blue" style={astyle}>
            <MDBNavLink to="/login" style={bstyle}>로그인</MDBNavLink>
            </MDBBtn>
          </MDBBtnGroup>} 
            
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    <Route path="/" exact component={Jumbotron}/>
    <Route path="/login" component={(props)=><Login {...props} loginCheck={this.isLogin}/>}/>
    <Route path="/join" component={Join}/>
    <Route path="/board" component={Board}/>
    <Route path="/passChange" component={passChange}/>
    <Route path="/mypage" component={(props)=><Mypage {...props} loginCheck={this.isLogin}/>}/>
    <Route path="/delUser" component={(props)=><DelUser {...props} logoutCheck={this.isLogout}/>}/>
    <Route path="/detail/:bno" component={BoardDetail}/>
    <Route path="/modify/:bno" component={BoardModify}/>
    <Route path="/statistics" component={Statistics}/>
    <Route path="/write" component={BoardWrite}/>
    <Route path="/search/:sname" component={SearchSummoner}/>
    </Router>
    );
  }
}

export default connect()(Navbar)