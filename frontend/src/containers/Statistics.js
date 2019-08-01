import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead , MDBRow,MDBContainer } from 'mdbreact';
import axios from 'axios'
import "../assets/css/table.css"

class DatatablePplaynum extends Component{
  constructor(){
    super()
    this.state={
          data:[
              
          ]
      // Rerender : false,
    }
}

componentDidMount(){
      let url = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/ko_KR/champion.json"
      axios.get(url)
      .then((res)=>{
        let gg=[];
        for(var i in res.data.data){
          gg.push(res.data.data[i])
        }
        // console.dir(gg)
        this.setState({
          data:gg
        })
        // console.log(this.state.data)
      })
      .catch(e=>{
          alert('실패')
      })
}
render(){

  const champion_area=
    this.state.data.map((v,i)=>
      <tr key={i}>
          <td>{i+1}</td>
          <td align="left"> <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${v.image.full}`} width="50" height="50"/> {v.name}</td>
          <td align>{v.blurb.replace(/<br>/gi,"")}</td>
          <td>{v.title}</td>
      </tr>
    )
    return(
      <MDBRow center>
        <MDBContainer className="white col-md-10 "  >
        <MDBTable  bordered striped> 
      <MDBTableHead>
        <tr>
          <th width="10">#</th>
          <th width="150">챔피언</th>
          <th width="70%">챔피언 설명</th>
          <th width="10%">별칭</th>
        </tr>
      </MDBTableHead >
      <MDBTableBody>
       {champion_area}
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
      </MDBRow>
    )
  }
}



export default DatatablePplaynum;