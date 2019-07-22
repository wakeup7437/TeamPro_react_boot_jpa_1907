import React, { Component } from 'react'
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput,
    MDBNavLink
  } from "mdbreact";
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : '',
        }
        this.Login = this.Login.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.pwChange = this.pwChange.bind(this)
        
    }

    emailChange(e){
        this.setState({email: e.target.value})
    }

    pwChange(e){
        this.setState({password: e.target.value})
    }

    Login(e){
      console.log(this.props)
      console.log(this.props.islogin)
      // this.props.history.push('/')

        e.preventDefault();
        let data={
            email : this.state.email,
            password : this.state.password
        }

        axios.post('http://localhost:8080/users/login', data)

        .then(res=> {
            if (res.data) {
              sessionStorage.setItem('uno',JSON.stringify(res.data.uno))
              sessionStorage.setItem('email',JSON.stringify(res.data.email))
              sessionStorage.setItem('userName',JSON.stringify(res.data.userName))
              sessionStorage.setItem('regdate',JSON.stringify(res.data.regdate))
              // sessionStorage.getItem('uno')
              this.props.loginCheck()
              this.props.history.push('/')
            } else {
                alert('아이디나 비밀번호가 틀렸습니다.')
            }
        })
        .catch(e=>{
            alert('axios연동실패')
        })
        
    }

    render(){
        return(
            <MDBContainer className="py-5">
            <MDBRow center>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                      <h3 className="my-3">
                        <MDBIcon icon="lock" /> 로그인
                      </h3>
                    </MDBCardHeader>
                    <form>
                      <div className="grey-text">
                        <MDBInput
                           label="Your email"
                           icon="envelope"
                           group
                           type="email"
                           validate
                           error="wrong"
                           success="right"
                           onChange={this.emailChange}
                        />
                        <MDBInput
                          label="Type your password"
                          icon="lock"
                          group
                          type="password"
                          onChange={this.pwChange}
                          validate
                        />
                      </div>
                    
                    <div className="text-center mt-4">
                      <MDBBtn
                        color="light-blue"
                        className="mb-3"
                        onClick={this.Login}
                      >
                        Login
                      </MDBBtn>
                    </div>
                    </form>
                    <MDBModalFooter>
                      <div className="font-weight-light">
                        <MDBNavLink to="/join"><p>회원가입하기</p></MDBNavLink>
                        <p>Forgot Password?</p>
                      </div>
                    </MDBModalFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )
    }
}
export default Login