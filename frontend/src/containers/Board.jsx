import React, { Component } from 'react'
import SideNav from '../components/SideNav'
import {MDBDataTable,MDBContainer,MDBCol,MDBRow,MDBCard,MDBBtn,MDBBadge} from 'mdbreact'
import axios from 'axios'
import BoardDetail from './BoardDetail';

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
      let url = "http://localhost:8080"
      axios.get(url+'/board/all')
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
        alert("")
      })
    }
    btnClick=(e)=>{
      this.props.history.push('detail/'+e)
    }
    render(){
        const data=(this.state.loaded?this.cAndr:'')
        return(
          <MDBRow>
              <MDBContainer className="white col-md-10">
                <MDBCard className="py-4">Boards</MDBCard>
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
export default Board;