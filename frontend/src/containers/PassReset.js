import React, { Component, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const PassReset = () =>{
    const [ewr] = useState(0);
    return(
        <div>
           <MDBContainer>
                <MDBRow center>
                    <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                        <form>
                            <p className="h4 text-center py-4">비밀번호 변경</p>
                            <p>회원님의 개인정보를 안전하게 보호하고, 개인정보 도용으로 인한 피해를 예방하기 위해 주기적으로 비밀번호 변경을 권장드립니다.</p>
                            <br/>
                            <label
                            className="grey-text font-weight-light"
                            >
                            아이디
                            </label>
                            <input
                            type="text"
                            id="defaultFormCardNameEx"
                            className="form-control"
                            />
                            <br />
                            <label
                            className="grey-text font-weight-light"
                            >
                            새 비밀번호
                            </label>
                            <input
                            type="password"
                            id="defaultFormCardEmailEx"
                            className="form-control"
                            />
                            <br />
                            <label
                            className="grey-text font-weight-light"
                            >
                            새 비밀번호 확인
                            </label>
                            <input
                            type="password"
                            id="defaultFormCardEmailEx"
                            className="form-control"
                            />
                            <div className="text-center py-4 mt-3">
                            <MDBBtn className="btn btn-outline-purple" type="submit">
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
        </div>
    )
}
export default PassReset