import React from 'react';
import { MDBIcon, MDBContainer, MDBRow, MDBBtn,MDBPageNav } from 'mdbreact';

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
                <MDBRow>
                    <MDBBtn onClick={this.handleToggle}><MDBIcon icon="bars" size="3x" /></MDBBtn>
                </MDBRow>
                <MDBPageNav>
                  

                </MDBPageNav>
            </MDBContainer>
        );
      }
    }

export default SideNav;