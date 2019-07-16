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
    MDBInput
  } from "mdbreact";
class Login extends Component{
    constructor(){
        super()
        this.state={
            email : '',
            password : ''
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
        e.preventDefault();
        let data={
            email : this.state.email,
            password : this.state.password
        }

        axios.post('http://localhost:8080/users/login', data)

        .then(res=> {
            if (res.data) {
              console.dir(res.data)
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
            <MDBContainer>
            <MDBRow center>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                      <h3 className="my-3">
                        <MDBIcon icon="lock" /> Login:
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
                        <p>Not a member? Sign Up</p>
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