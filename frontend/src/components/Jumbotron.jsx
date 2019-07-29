import React from "react";
import "../assets/css/Jumbotron.css"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody,MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView,  } from "mdbreact";
import First from "../assets/images/First.jpg"
import Two from "../assets/images/Two.jpg"
import Three from "../assets/images/Three.jpg"
const JumbotronPage = () => {
    const style ={
        background : ''
    }

  return (
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
                src={First}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={Two}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={Three}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
  )
}

export default JumbotronPage;