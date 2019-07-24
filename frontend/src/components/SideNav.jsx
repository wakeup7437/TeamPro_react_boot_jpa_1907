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
  func(){
    let body=<div>
    ddddd
    </div>
    return body
  }
    render() {
      const { isOpen } = this.state;
      const items=[]
      let i=0
      while(i<10){
        i++
        items.push(<div>{i}</div>)
      }
      return (
          <MDBContainer>
              <MDBRow>
                  <MDBBtn onClick={this.handleToggle}><MDBIcon icon="bars" size="3x" /></MDBBtn>
              </MDBRow>{isOpen?
              <MDBPageNav>
                {items}
              </MDBPageNav>:this.func()}
          </MDBContainer>
      );
    }
}
export default SideNav;