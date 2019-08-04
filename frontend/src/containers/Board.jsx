import React, { Component } from 'react'
import {MDBDataTable,MDBContainer,MDBRow,MDBCard,MDBBtn,MDBBadge} from 'mdbreact'
import axios from 'axios'
import {connect} from 'react-redux'

class Board extends Component{
    constructor(props){
        super(props);
        this.state={loaded:false}
        this.cAndr={columns:[{
          label: 'Number',
          field: 'bno',
          sort: 'desc'
        },
        {
          label: 'Writer',
          field: 'writer',
          width: 270
        },
        {
          label: 'Title',
          field: 'title',
          width: 200
        },
        {
          label: 'Category',
          field: 'category',
        },
        {
          label: 'Recommend',
          field: 'recommend',
        },
        {
          label: 'Regdate',
          field: 'regdate',
          sort: 'desc',
          width: 100
        },
        {
          label: 'Reply',
          field: 'replies',
          width: 150
        },
        {
          lable: 'Details',
          field: 'details',
        }],
        rows:[]
      }
    }
    
    componentDidMount(){
      axios.get('/board/all')
      .then((d)=>{
        d.data.forEach(e => {
          e.replies=<MDBBadge color="primary" pill>{e.replies.length}</MDBBadge>
          e.regdate=e.regdate.split('T')[0]
          delete e.content
          e.detail=<MDBBtn color="dark-green" size="sm" onClick={()=>this.btnClick(e.bno)}>Detail</MDBBtn>
        })
        this.cAndr.rows=d.data
        this.setState({loaded:true})
      })
      .catch((e)=>{
        console.log("fail--"+e)
        alert(e)
      })
    }
    btnClick=(e)=>{
      this.props.history.push('detail/'+e)
    }
    write=()=>{
      console.dir(this.props)
      this.props.history.push('/write')
    }
    render(){
        const data=(this.state.loaded?this.cAndr:'')
        return(
          <MDBRow>
              <MDBContainer className="white col-md-10">
                <MDBCard>
                  <MDBRow className="p-4 d-flex justify-content-between">
                      <h2 className="">Boards</h2>
                    {this.props.login?<MDBBtn onClick={this.write}>글쓰기</MDBBtn>:''}
                  </MDBRow>
                </MDBCard>
                {this.state.loaded?
                <MDBDataTable 
                  responsive
                  striped
                  bordered
                  hover
                  data={data}
                >
                </MDBDataTable>
                :<div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                }
              </MDBContainer>
          </MDBRow>     
        )
    }
}
const mapStateToProps = (state) =>{
  return state.login
}
export default connect(mapStateToProps)(Board)