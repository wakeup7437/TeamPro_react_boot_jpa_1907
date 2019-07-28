import React,{Component} from 'react'
import {MDBContainer,MDBCard,MDBCardBody,MDBCardFooter,MDBCardHeader,MDBInput,MDBRow,MDBCol,MDBListGroup,MDBListGroupItem,MDBBtn,MDBModal,MDBModalHeader,MDBModalBody,MDBModalFooter} from 'mdbreact'
import axios from 'axios'
import {connect} from 'react-redux'
import {boardModify} from '../actions'

class BoardModify extends Component{
    
    handleChange=(e)=>{
        const data={[e.target.id]:e.target.value}
        this.props.dispath(boardModify(data))
    }

    cancel=()=>{
        this.props.history.push('/')
    }
    save=()=>{
        console.log('save')
    }
    render(){
    const {bno}=this.props.match.params
    const {previnfo}=this.props
    console.log(previnfo)

    
    return (
    <MDBContainer>
        <MDBCard>
            <MDBCardHeader className="text-left">
                <div className="d-block p-2">
                <h2>게시글 수정</h2>
                <MDBInput
                    label="Title"
                    size="lg"
                    group
                    validate
                    error="wrong"
                    success="right"
                    value={previnfo.title}
                  />
                </div>
                
            </MDBCardHeader>
            <MDBCardBody className="">
            <MDBRow>
                <MDBCol size="6">
                <div>
                    <label htmlFor="category" className="grey-text float-left">
                    Category
                    </label>
                    <select 
                        className="d-inline browser-default custom-select inline"
                        id="category" onChange={this.handleChange} 
                    >
                    <option value="FREE">자유</option>
                    <option value="CATE1">CATEGORY1</option>
                    <option value="CATE2">CATEGORY2</option>
                    <option value="CATE3">CATEGORY3</option>
                    <option value="CATE4">CATEGORY4</option>
                    <option value="CATE5">CATEGORY5</option>
                    </select>
                </div>
                </MDBCol>
            </MDBRow>
                <MDBInput
                    label="Title"
                    size="lg"
                    id="title"
                    className="form-control"
                    onChange={this.handleChange}
                    value={previnfo.content}
                    />
                
            </MDBCardBody>
            <MDBCardFooter>
                <MDBBtn color="primary" onClick={this.save} >Submit</MDBBtn>
                <MDBBtn color="danger" onClick={this.cancel} >cancel</MDBBtn>
            </MDBCardFooter>
        </MDBCard> 
    </MDBContainer>
    )}
}
const mapStateToProps = (state) =>{
    return state.board
  }
export default connect(mapStateToProps)(BoardModify)