import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead , MDBRow } from 'mdbreact';
import axios from 'axios'

class DatatablePplaynum extends Component{
  constructor(){
    super()
    this.state={
      data : '',
      Rerender : false
    }
}


componentDidMount(){
      let url = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/ko_KR/champion.json"
      axios.get(url)
      .then((res)=>{
        // for(var i in res.data.data){
        //   console.log(res.data.data[i])
        // }
        this.state.data=res.data.data
        // this.data.rows[0].champion=res.data.data.Aatrox.name
        this.setState({Rerender : true})
      })
      .catch(e=>{
          alert('실패')
      })
}
   
  render(){
    
    return(
      <MDBRow center>
        <MDBTable  className="white col-md-10">
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Heading</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {/* {this.state.data.map((q,i)=>{
               return
                <tr key={i}>
                <td></td>
                <td>Cell</td>
                </tr>
            })} */}
          </MDBTableBody>
        </MDBTable>
      </MDBRow>
    )
  }
}



export default DatatablePplaynum;