import React,{Component} from 'react'
import {MDBContainer,MDBCard,MDBCardBody,MDBCardFooter,MDBCardHeader,MDBInput,MDBRow,MDBCol,MDBBtn} from 'mdbreact'
import axios from 'axios'
import {connect} from 'react-redux'

class BoardWrite extends Component{
        
    state={
        writer:sessionStorage.getItem('userName'),  
        title:'',
        category:'',
        content:''
    }

    save=()=>{
        console.log(this.state)
        axios.post('/board/insert',this.state)
        .then((d)=>{
            this.props.history.push('/board')
        })
        .catch(e=>{
            alert(e)
        })
    }
    cancel=()=>{
        this.props.history.push('/board')
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
    return (
    <MDBContainer>
        <MDBCard>
            <MDBCardHeader className="text-left">
                <div className="d-block p-2">
                    <h2>게시글 작성</h2>
                </div>
            </MDBCardHeader>
            <MDBCardBody className="">
                <MDBRow>
                <MDBCol>
                <div>
                    <label htmlFor="category" className="grey-text float-left">
                    Category
                    </label>
                    <select 
                        className="d-inline browser-default custom-select inline"
                        id="category" onChange={this.handleChange}
                    >
                    <option value="FREE" select="true">자유</option>
                    <option value="CATE1">CATEGORY1</option>
                    <option value="CATE2">CATEGORY2</option>
                    <option value="CATE3">CATEGORY3</option>
                    <option value="CATE4">CATEGORY4</option>
                    <option value="CATE5">CATEGORY5</option>
                    </select>
                </div>
                </MDBCol>
                <MDBCol  className="clearfix">
                    <br/>
                    <label htmlFor="writer" className="p-3 grey-text float-center">Writer</label>
                    <div id="writer" className="d-inline p-3">{sessionStorage.getItem("userName")}</div>
                </MDBCol>
            </MDBRow>
            <br/>
                <MDBInput
                label="Title"
                size="lg"
                id="title"
                className="form-control"
                onChange={this.handleChange}
                />
                <br/>
                <MDBInput type="textarea" label="글 작성" rows="10" id="content"onChange={this.handleChange} />
            </MDBCardBody>
            <MDBCardFooter className="p-4 d-flex justify-content-between">
                <MDBBtn color="primary" onClick={this.save} >Submit</MDBBtn>
                <MDBBtn color="danger" onClick={this.cancel} >cancel</MDBBtn>
            </MDBCardFooter>
        </MDBCard> 
    </MDBContainer>
    )}
}

export default connect()(BoardWrite)