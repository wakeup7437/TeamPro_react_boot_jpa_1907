import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Axios from 'axios';

class Mypage extends Component{
    constructor(){
        super()
        this.state={
          userName : '',
          email : '',
          password : '',
          pCheck : ''
        }
        this.emailUpdate = this.emailUpdate.bind(this)
        this.passwordUpdate = this.passwordUpdate.bind(this)
        this.userNameUpdate = this.userNameUpdate.bind(this)
        this.Update = this.Update.bind(this)

    }

    emailUpdate(e){
      this.setState({email: e.target.value})
    }
    passwordUpdate(e){
      this.setState({password: e.target.value})
    }
    userNameUpdate(e){
      this.setState({userName: e.target.value})
    }

    Update(e){
      e.preventDefault();
      let data={
        userName : this.state.userName,
        password : this.state.password,
        email : this.state.email
      }
      Axios.put('http://localhost:8080/users/update',data)
      .then(res=>{
        alert('성공')
      })
      .catch(e=>{
        alert('실패')
      })
    }
    
    render(){
        return(
            <MDBContainer className="py-5">
      <MDBRow center>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Account Information</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.emailUpdate}
                  />
                  <MDBInput
                    label="Your name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.userNameUpdate}
                  />
                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    validate
                    onChange={this.passwordUpdate}
                  />
                  <MDBInput
                    label="Confirm your password"
                    group
                    type="text"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan"  onClick={this.Update}>
                    회원 정보 수정
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        )
    }
}

export default Mypage