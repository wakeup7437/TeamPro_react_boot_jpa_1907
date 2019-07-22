import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, } from 'mdbreact';

class Mypage extends Component{
    constructor(props){
        super(props)
        this.state={
          userName : JSON.parse(sessionStorage.getItem('userName')) ,
          email : JSON.parse(sessionStorage.getItem('email')),
          regdate : JSON.parse(sessionStorage.getItem('regdate')),
        }
        this.userNameUpdate = this.userNameUpdate.bind(this)
    }
    userNameUpdate(e){
      this.setState({userName: e.target.value})
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
                    label="이메일"
                    group
                    type="email"
                    icon="null"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.email}
                    

                  />
                  <MDBInput
                    label="닉네임"
                    group
                    type="text"
                    icon="null"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.userNameUpdate}
                    value={this.state.userName}
                  />
                  <MDBInput
                    label="가입일"
                    group
                    type="text"
                    icon="null"
                    validate
                    value={this.state.regdate.split('T')[0]}
                    
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan"  onClick={this.Update}>
                    비밀 번호 변경
                  </MDBBtn>
                  <MDBBtn color="red"  onClick={this.deleteCheck}>
                    회원 탈퇴
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