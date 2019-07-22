import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Axios from 'axios';

class Mypage extends Component{
    constructor(){
        super()
        this.state={
          userName : JSON.parse(sessionStorage.getItem('userName')) ,
          email : JSON.parse(sessionStorage.getItem('email')),
          password : '',
          pCheck : ''
        }
        this.passwordUpdate = this.passwordUpdate.bind(this)
        this.userNameUpdate = this.userNameUpdate.bind(this)
        this.Update = this.Update.bind(this)
        this.passwordCheck = this.passwordCheck.bind(this)
        this.delete = this.delete.bind(this)
        this.deleteCheck = this.deleteCheck.bind(this)
    }
    passwordUpdate(e){
      this.setState({password: e.target.value})
    }
    userNameUpdate(e){
      this.setState({userName: e.target.value})
    }
    passwordCheck(e){
      this.setState({pCheck: e.target.value})
    }

    deleteCheck(e){
      e.preventDefault();
      if(window.confirm("정말 삭제 하시겠습니까??") == true){
        this.delete(e)
        alert('삭제성공')
      }else{
        return
      }
    }

    delete(e){
      e.preventDefault();
      

      Axios.delete(`http://localhost:8080/users/delete/${JSON.parse(sessionStorage.getItem('uno'))}`)
      .then(res=>{
        alert('삭제성공')
        this.props.delCheck()
      })
      .catch(e=>{
        alert('에러')
      })

    }

    Update(e){
      e.preventDefault();
      let data={
        uno : JSON.parse(sessionStorage.getItem('uno')),
        userName : this.state.userName,
        password : this.state.password
      }
      if(this.state.password === this.state.pCheck && this.state.password != '' && this.state.userName !=''){
          Axios.put('http://localhost:8080/users/update',data)
          .then(res=>{
            alert('업데이트 성공')
          })
          .catch(e=>{
            alert('실패')
          })
      }else{
        alert('변경할 내용중 공백이 있거나 같지 않습니다')
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
                <p className="h4 text-center py-4">Account Information</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.email}
                    

                  />
                  <MDBInput
                    label="Your name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.userNameUpdate}
                    value={this.state.userName}
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
                    onChange={this.passwordCheck}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan"  onClick={this.Update}>
                    회원 정보 수정
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