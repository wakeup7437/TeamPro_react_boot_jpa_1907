import React, { Component } from 'react'
import SideNav from '../components/SideNav'
import {MDBDataTable,MDBContainer,MDBCol,MDBRow,MDBTableHead,MDBTableBody,MDBTable,MDBCard} from 'mdbreact'
import axios from 'axios'

class Board extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
      let url = "http://localhost:8080"
      let param={page:"3"}
      axios.get(url+'/board/all')
      .then((d)=>{
        alert("success")
        console.log(d.data)
      })
      .catch((e)=>{
        console.log("fail--"+e)
      })
    }
    btnClick=(e)=>{
      e.preventDefault()
      console.log('test174')
      axios.get('http://localhost:8080/board/detail/174')
      .then((d)=>{
        console.log(d.data)
      })
      .catch(e=>{
        console.log(e)
      })
    }
    render(){
        const data=''
        return(
            <>
            <MDBRow>
                <MDBCol><SideNav/></MDBCol>
                <MDBCol md="8">
                <MDBContainer className="white col-md-10">
                    <MDBCard>xx</MDBCard>
                
                    <MDBDataTable 
                      responsive
                      striped
                      bordered
                      hover
                      data={data}
                    >      
                      {/* <MDBTableHead columns={data.columns} />
                      <MDBTableBody rows={data.rows}/> */}
                    </MDBDataTable>
                
                </MDBContainer>
                </MDBCol>
            </MDBRow>
            <button onClick={this.btnClick}>btn</button>
            </>         
        )
    }
}
export default Board;