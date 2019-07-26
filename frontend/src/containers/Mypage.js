import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, } from 'mdbreact';
import Axios from 'axios'

class Mypage extends Component{
    constructor(props){
        super(props)
        this.userNameUpdate = this.userNameUpdate.bind(this)
        this.Update = this.Update.bind(this)
        this.state={
          valueName : JSON.parse(sessionStorage.getItem('userName')) ,
          userName : '',
          email : JSON.parse(sessionStorage.getItem('email')),
          regdate : JSON.parse(sessionStorage.getItem('regdate')),
          NameChanger : false
        }
    }
    userNameUpdate(e){
      this.setState({userName: e.target.value})
    }

    Changer =() =>{
      this.setState({NameChanger : !this.state.NameChanger})
    }

    Update(e){
      e.preventDefault();
      let data={
        uno : JSON.parse(sessionStorage.getItem('uno')),
        userName : this.state.userName
      }
      if(this.state.userName != ''){
        Axios.put('http://localhost:8080/users/name',data)
        .then(res=>{
            if(res.data){
               alert("업데이트 성공")
               sessionStorage.setItem('userName',JSON.stringify(res.data.userName))
               this.props.loginCheck()
                // this.props.history.push('/')
                // this.props.history.push('/')
            }else{
              alert('변경하실 닉네임이 이미 존재합니다.')
            }
        })
        .catch(e=>{
        alert('실패')
        })
      }else{
        alert('변경할 닉네임을 입력하세요')
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
                <p className="h4 text-center py-4">회원 정보</p>
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
                    label="닉네임 (변경 하려면 클릭)"
                    group
                    type="text"
                    icon="null"
                    validate
                    error="wrong"
                    success="right"
                    value={JSON.parse(sessionStorage.getItem('userName'))}
                    onClick={this.Changer}
                  />
                  {this.state.NameChanger ?
                   <div>
                    <MDBInput
                    label="변경할 닉네임"
                    group
                    type="text"
                    icon="null"
                    validate
                    onChange={this.userNameUpdate}
                    />
                  <MDBInput
                  label="가입일"
                  group
                  type="text"
                  icon="null"
                  validate
                  value={this.state.regdate.split('T')[0]}
                   />
                  </div> :
                  <MDBInput
                  label="가입일"
                  group
                  type="text"
                  icon="null"
                  validate
                  value={this.state.regdate.split('T')[0]}
                   />}
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan"  onClick={this.Update}>
                    닉네임 변경
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