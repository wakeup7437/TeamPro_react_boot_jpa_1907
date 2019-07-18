import React from "react";
import "../assets/css/Jumbotron.css"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText,MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
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

            <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage;