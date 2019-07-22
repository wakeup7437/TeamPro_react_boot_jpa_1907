import React, { Component } from 'react'
import axios from 'axios';
import "../assets/css/join.css"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
class Join extends Component{
    constructor(){
        super()
        this.state={
          userName : '',
          email : '',
          pCheck : '',
          password : ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.passwordCheck = this.passwordCheck.bind(this);
        this.Join = this.Join.bind(this); 
    }

    nameChange(e){
      this.setState({userName: e.target.value})
    }

    emailChange(e){
      this.setState({email: e.target.value})
    }
    
    passwordChange(e){
      this.setState({password: e.target.value})
    }
    
    passwordCheck(e){
      this.setState({pCheck: e.target.value})
    }

    Join(e){
      e.preventDefault();
      let data={
          email : this.state.email,
          userName : this.state.userName,
          password : this.state.password
      }
      if(this.state.password === this.state.pCheck && this.state.email && this.state.userName && this.state.password) {
          axios.post('http://localhost:8080/users/join', data)
          .then(res=>{
            if(res.data){
              alert('가입성공')
            }else{
              alert('가입 실패 중복된 이메일입니다.')
            }
          })
          .catch(e=>{
              alert('이미 사용중인 메일입니다!')
          })
      }else{
        alert('폼에 맞게 작성하세요.')
      }

      
    }

    render(){
        return(
            <MDBContainer className="py-5">
      <MDBRow center>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.nameChange}
                  />
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
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={this.passwordChange}
                    />
                  <MDBInput
                    label="Confirm your password"
                    icon="exclamation-triangle"
                    group
                    type="password"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.passwordCheck}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" onClick={this.Join}>
                    Register
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
export default Join