import React, { Component } from 'react'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Axios from 'axios'

class DelUser extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        this.delete = this.delete.bind(this)
        this.deleteCheck = this.deleteCheck.bind(this)
    }

    deleteCheck(e){
        e.preventDefault();
        if(window.confirm("정말 삭제 하시겠습니까??") === true){
          this.delete(e)
        }else{
          return
        }
      }
  
    delete(e){
    e.preventDefault();
    Axios.delete(`http://localhost:8080/users/delete/${JSON.parse(sessionStorage.getItem('uno'))}`)
    .then(res=>{
        alert('계정 탈퇴! 이용해 주셔서 감사합니다.')
        this.props.logoutCheck()
        this.props.history.push('/')
    })
    .catch(e=>{
        alert('에러')
    })
    }

    render(){
        const style={
           textAlign: 'left'
        }
        return(
            <MDBContainer className="mt-5 text-center">
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron>
                        <h2 className="h3 display-5" style={style}>회원 탈퇴</h2>
                        <p className="lead" style={style}>
                          회원탈퇴 전에 반드시 유의사항을 확인하고 진행해 주세요.
                        </p>
                        <hr className="my-2" />
                        <br/>
                        <ul style={style}>
                            <li>개인정보 및 개인화 서비스 이용기록이 모두 삭제 되며, 삭제된 데이터는 복구되지 않습니다. 필요한 데이터는 미리 백업해 주시기 바랍니다.
                            </li><br/>
                            <li>커뮤니티 서비스 등록 게시물 유지
                                회원가입 이후 등록하신 게시물들은 회원탈퇴 후에도 삭제 되지 않고 유지됩니다.<br/> 삭제를 원하시는 경우에는 직접 삭제하신 후 회원탈퇴를 진행하시기 바랍니다.
                            </li><br/>
                            <li>
                            회원 탈퇴 시 일부 개인정보는 개인정보처리방침에 따라 탈퇴일로부터 30일간 보관되며, 그 이후 관계법령에 필요한 경우에는 별도 보관합니다.
                            </li><br/>
                            <li> 탈퇴 후 제한
                            탈퇴 처리된 이메일 ID는 30일동안 재가입이 불가합니다.
                            </li>
                        </ul>
                            <br/>
                        <p className="lead">
                            <MDBBtn color="primary" onClick={this.deleteCheck}>동의</MDBBtn>
                        </p>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}


export default DelUser