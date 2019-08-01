import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => (
  <MDBFooter color="light-blue accent-4" className="font-small pt-4 mt-4">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
        <MDBCol md="8">
          <h5 className="title">API LINK</h5>
          <a href="https://developer.riotgames.com/"> DEVELOPER LOL API</a>
        </MDBCol>
        <MDBCol md="4">
          <h5 className="title">Teams Github</h5>
          <ul>
            <li className="list-unstyled">
              <a href="https://github.com/wakeup7437/TeamPro_react_boot_jpa_1907">Ki-sang Yoo</a>
            </li>
            <li className="list-unstyled">
              <a href="#!">Hyeoung-guk Chae</a>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; 2019 Copyright: <a href="https://bitcamp.co.kr"> Bitcamp.co.kr </a>
      </MDBContainer>
    </div>
  </MDBFooter>
)

export default Footer;