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
    MDBNavLink,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
  } from "mdbreact";
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email : '',
            password : '',
            modal: false
        }
        this.Login = this.Login.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.pwChange = this.pwChange.bind(this)
        this.passFind = this.passFind.bind(this)
        
    }

    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
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
              sessionStorage.setItem('uno',JSON.stringify(res.data.uno))
              sessionStorage.setItem('email',JSON.stringify(res.data.email))
              sessionStorage.setItem('userName',JSON.stringify(res.data.userName))
              sessionStorage.setItem('regdate',JSON.stringify(res.data.regdate))
              // sessionStorage.getItem('uno')
              this.props.loginCheck()
              this.props.history.push('/')
            } else {
                alert('아이디나 비밀번호가 다르거나 존재하지않습니다.')
            }
        })
        .catch(e=>{
            alert('axios연동실패')
        })
        
    }

    passFind(e){
        e.preventDefault();
        let data={
            email : this.state.email,
        }

        axios.post('http://localhost:8080/users/email', data)
        .then(res=> {
            if (res.data) {
                alert('이메일에 임시비밀번호가 발송되었습니다.')
                this.toggle()
                this.state.userName=''
            } else {
                alert('이메일이나 비밀번호가 다르거나 존재하지않습니다.')
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
                           label="이메일"
                           icon="envelope"
                           group
                           type="email"
                           validate
                           error="wrong"
                           success="right"
                           onChange={this.emailChange}
                        />
                        <MDBInput
                          label="비밀번호"
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
                         <MDBNavLink to="/join"><p> GC.kr에 처음이세요? 회원가입하기</p></MDBNavLink>
                         <MDBNavLink><p onClick={this.toggle}>비밀번호를 잊으셨나요?</p></MDBNavLink>

                          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>비밀번호 찾기
                            </MDBModalHeader>
                            <MDBModalBody>
                            <div className="grey-text py-4" >
                              <p>비밀번호를 찾고자 하는 GC.KR 이메일 ID를 입력해주시면 <br/>
                                 해당 메일 주소로 임시 비밀번호를 보내드립니다.</p><br/>
                                  <MDBInput
                                    label="이메일"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.emailChange}
                                  />
                                </div>
                            </MDBModalBody>
                            
                            <MDBModalFooter>
                              <MDBBtn color="secondary" onClick={this.toggle}>취소</MDBBtn>
                              <MDBBtn color="primary" onClick={this.passFind}>확인</MDBBtn>
                            </MDBModalFooter>
                          </MDBModal>

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