import React,{Component} from 'react'
import {MDBContainer,MDBCard,MDBCardBody,MDBCardFooter,MDBCardHeader,MDBInput,MDBRow,MDBCol,MDBBtn} from 'mdbreact'
import axios from 'axios'
import {connect} from 'react-redux'
import {boardModify} from '../actions'

class BoardModify extends Component{
    constructor(){
        super()
        this.state={
            category:"FREE"
    }
    }
    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
        this.data={[e.target.id]:e.target.value}
        this.props.dispatch(boardModify(this.data))
        console.dir(this.data)
        console.log(this.props.prevdata)
        console.log(this.state)
    }
    cancel=()=>{
        this.props.history.push('/')
    }
    save=()=>{
        let data={
            bno:this.props.match.params.bno,
            writer:this.props.login.userinfo.userName,
            content:this.state.content,
            category:this.state.category,
            title:this.state.title
        }
        console.log(this.props.login.userinfo.userName)
        this.setState({bno:this.props.match.params.bno,
            writer:this.props.login.userinfo.userName})
        axios.put('/board/update',data)
        .then(()=>{
            this.props.history.replace("/detail/"+this.props.match.params.bno)
        })
        .catch((e)=>{
            alert(e)
        })
    }
    render(){
    const {prevdata}=this.props.board
    //console.log(prevdata)
    return (
    <MDBContainer>
        <MDBCard>
            <MDBCardHeader className="text-left">
                <div className="d-block p-2">
                    <h2>게시글 수정</h2>
                </div> 
            </MDBCardHeader>
            <MDBCardBody className="">
            <MDBInput
                    label="Title"
                    size="lg"
                    id="title"
                    onChange={this.handleChange}
                    value={prevdata.title}
                  />
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
                    <option value="FREE" select="true">자유</option>
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
                    label="Content"
                    size="lg"
                    id="content"
                    type="textarea"
                    rows="10"
                    className="form-control"
                    onChange={this.handleChange}
                    value={prevdata.content}
                    />
                
            </MDBCardBody>
            <MDBCardFooter>
                <MDBBtn color="primary" onClick={this.save} >Modify</MDBBtn>
                <MDBBtn color="danger" onClick={this.cancel} >Cancel</MDBBtn>
            </MDBCardFooter>
        </MDBCard> 
    </MDBContainer>
    )}
}
const mapStateToProps = (state) =>{
    return state
  }
export default connect(mapStateToProps)(BoardModify)