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

    validate(){
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (regExp.test(this.state.email)) return true;
      else return false;
    }

    Join(e){
      e.preventDefault();
      let data={
          email : this.state.email,
          userName : this.state.userName,
          password : this.state.password
      }
      if(this.state.password === this.state.pCheck && this.state.email && this.state.userName && this.state.password && this.validate()) {
          axios.post('/users/join', data)
          .then(res=>{
            if(res.data){
              alert('회원가입성공')
              this.props.history.push('/')
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
                <p className="h4 text-center py-4">회원가입</p>
                <div className="grey-text">
                  <MDBInput
                    label="닉네임"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.nameChange}
                  />
                  <MDBInput
                    label="이메일 ex) good123@naver.com"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.emailChange}
                  />
                    <MDBInput
                      label="패스워드"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={this.passwordChange}
                    />
                  <MDBInput
                    label="비밀번호 확인"
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