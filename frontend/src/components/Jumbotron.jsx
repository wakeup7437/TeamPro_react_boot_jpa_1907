import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import "./Jumbotron.css"
const JumbotronPage = () => {
    const style ={
        background : ''
    }

  return (
    <MDBContainer className="mt-5 text-center" style={style}>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
          
            <MDBCardBody style={style}>
            <div className="input-group" >
            <div className="input-group-prepend" >
                <span className="input-group-text" id="basic-addon" >
                   <i className="fa fa-user prefix"></i>
                </span>
            </div>
            <input type="text" className="form-control" placeholder="소환사명" aria-label="Username" aria-describedby="basic-addon" />
            </div>
              <MDBBtn href="#" gradient="purple" rounded>
                검색
              </MDBBtn>
            </MDBCardBody>

            <MDBCardImage
              className="img-fluid"
              src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" />
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;