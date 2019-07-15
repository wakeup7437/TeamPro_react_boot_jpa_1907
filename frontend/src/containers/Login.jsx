import React, { Component } from 'react'
import "./Login.css"
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
            userId : '',
            password : ''
        }
        this.Login = this.Login.bind(this)
        this.idChange = this.idChange.bind(this)
        this.pwChange = this.pwChange.bind(this)
    }

    idChange(e){
        this.setState({userId: e.target.value})
    }

    pwChange(e){
        this.setState({password: e.target.value})
    }

    Login(e){
        e.preventDefault();
        axios.post('http://localhost:9000/users/login')
        .then(res=>{
            alert('성공')
        })
        .catch(e=>{
            alert('실패')
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
                          label="Type your ID"
                          icon="user"
                          group
                          type="text"
                          onChange={this.idChange}
                          validate
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