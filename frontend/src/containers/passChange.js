import React, { Component } from 'react'
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "../assets/css/passChange.css"
import Axios from 'axios'

class passChange extends Component{
    constructor(){
        super()
        this.Update= this.Update.bind(this)
        this.passwordUpdate = this.passwordUpdate.bind(this)
        this.newpassword = this.newpassword.bind(this)
        this.newpassCheck = this.newpassCheck.bind(this)
        this.state={
            password : '',
            npass : '',
            nCheck : ''
          }
    }

    passwordUpdate(e){
        this.setState({password: e.target.value})
    }
    newpassword(e){
        this.setState({npass: e.target.value})
    }
    newpassCheck(e){
        this.setState({nCheck: e.target.value})
    }

    Update(e){
        e.preventDefault();
        let data={
          uno : JSON.parse(sessionStorage.getItem('uno')),
          password : this.state.password,
          npass : this.state.npass
        }
            if(this.state.npass == this.state.nCheck && this.npass !='' && this.nCheck !=''){
                Axios.put('/users/update',data)
                .then(res=>{
                    if(res.data === "Update"){
                        alert("업데이트 성공")
                        this.props.history.push('/')
                    }else{
                        alert('현재 비밀번호가 같지 않습니다')
                    }
                })
                .catch(e=>{
                alert('실패')
                })
            }else{
                alert('신규 비밀번호가 같지 않거나 공백입니다')
            }
    }
    render(){
        const formSt={
                background: "white",
          }
        return(
            <MDBContainer >
                <MDBRow center>
                    <MDBCol md="6" >
                    <form style={formSt}>
                        <h1 className="h4 text-center py-5" > 비밀번호 변경</h1>
                        <p className="grey-text">개인정보 보호를 위해 비밀번호를 주기적으로 변경해주세요.</p>
                        <div className="grey-text py-3">
                        <MDBInput
                            label="현재 비밀번호 입력"
                            icon="null"
                            group
                            type="password"
                            validate
                            onChange={this.passwordUpdate}
                        />
                        <MDBInput
                            label="신규 비밀번호 입력"
                            icon="null"
                            group
                            type="password"
                            validate
                            onChange={this.newpassword}
                        />
                        <MDBInput
                            label="신규 비밀번호 입력"
                            icon="null"
                            group
                            type="password"
                            validate
                            onChange={this.newpassCheck}
                        />
                   
                        </div>
                        <div className="text-center py-5">
                        <MDBBtn color="primary" onClick={this.Update}>확인</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

}
export default passChange