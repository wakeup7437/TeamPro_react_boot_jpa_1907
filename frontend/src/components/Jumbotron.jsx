import React from "react";
import "../assets/css/Jumbotron.css"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody,MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView,  } from "mdbreact";
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
                src="http://optimal.inven.co.kr/upload/2016/02/10/bbs/i10883115114.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://optimal.inven.co.kr/upload/2016/02/10/bbs/i12225589992.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://optimal.inven.co.kr/upload/2016/02/10/bbs/i12320450432.jpg"
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