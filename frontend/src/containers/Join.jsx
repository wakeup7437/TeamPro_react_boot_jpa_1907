import React, { Component } from 'react'
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
class Join extends Component{
    constructor(){
        super()
        this.state={
          name : '',
          email : '',
          eCheck : '',
          password : ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.emailCheck = this.emailCheck.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.Join = this.Join.bind(this); 
    }

    nameChange(e){
      this.setState({name: e.target.value})
    }

    emailChange(e){
      this.setState({email: e.target.value})
    }
    emailCheck(e){
      this.setState({eCheck: e.target.value})
    }

    passwordChange(e){
      this.setState({password: e.target.value})
    }

    Join(e){
      e.preventDefault();
      if(this.state.email=this.state.eCheck){
        alert('이메일맞음')
      }
      
      let data={
          email : this.state.email,
          eCheck : this.state.eCheck,
          name : this.state.name,
          password : this.state.password
      }
   
        axios.post('http://localhost:8080/users/join', data)
        .then(res=>{
          // alert('성공')
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
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.emailCheck}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={this.passwordChange}
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