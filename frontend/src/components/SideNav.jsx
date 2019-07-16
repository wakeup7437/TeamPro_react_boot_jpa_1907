import React from 'react';
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';

class SideNav extends React.Component {
    state = {
        isOpen: false
      }
    
      handleToggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      };
    
      render() {
        const { isOpen } = this.state;
        return (
            <MDBContainer>
                <MDBRow left>
                    <MDBBtn onClick={this.handleToggle}><MDBIcon icon="bars" size="5x" /></MDBBtn>
                </MDBRow>
            </MDBContainer>
        );
      }
    }

export default SideNav;