import React, { Component } from 'react'
import SideNav from '../components/SideNav'
import {MDBDataTable,MDBContainer,MDBCol,MDBRow,MDBCard,MDBBtn,MDBBadge} from 'mdbreact'
import axios from 'axios'
import BoardDetail from './BoardDetail';
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
          sort: 'asc',
          width: 270
        },
        {
          label: 'Title',
          field: 'title',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Category',
          field: 'category',
          sort: 'asc'
        },
        {
          label: 'Recommend',
          field: 'recommend',
          sort: 'asc'
        },
        {
          label: 'Regdate',
          field: 'regdate',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Reply',
          field: 'replies',
          sort: 'asc',
          width: 150
        },
        {
          lable: 'Details',
          field: 'details',
          sort: 'asc'
        }],
        rows:[]
      
      
      }
    }
    
    componentWillMount(){
      console.log(this.props.login)  
      console.log("mount start")
      console.dir(this.cAndr)
      let url = "http://localhost:8080"
      axios.get(url+'/board/all')
      .then((d)=>{
        console.dir(d.data)
        d.data.forEach(e => {
          e.replies=<MDBBadge color="primary" pill>{e.replies.length}</MDBBadge>
          e.regdate=e.regdate.split('T')[0]
          delete e.content
          
          e.detail=<MDBBtn color="dark-green" size="sm" onClick={()=>this.btnClick(e.bno)}>Detail</MDBBtn>
        })
        this.cAndr.rows=d.data
        console.log("setState()")
        this.setState({loaded:true})
        console.log(this.state)
        
      })
      .catch((e)=>{
        alert(e)
      })
      console.log('mountend')
      console.log(this.cAndr)
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
                    <MDBBtn onClick={this.write}>글쓰기</MDBBtn>
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