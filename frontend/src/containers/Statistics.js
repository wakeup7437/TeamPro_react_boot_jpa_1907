import React, { Component } from 'react';
import { MDBDataTable , MDBRow } from 'mdbreact';
import axios from 'axios'

class DatatablePplaynum extends Component{
  constructor(){
    super()
    this.state={
      name : ''
    }
    this.data={
      columns: [
        {
          label: '챔피언',
          field: 'champion',
          sort: 'asc',
          width: 50
        },
        {
          label: '승률',
          field: 'win',
          sort: 'asc',
          width: 200
        },
        {
          label: '플레이수',
          field: 'playnum',
          sort: 'asc',
          width: 100
        },
        {
          label: '평점',
          field: 'score',
          sort: 'asc',
          width: 150
        },
        {
          label: 'CS',
          field: 'cs',
          sort: 'asc',
          width: 100
        },
        {
          label: '골드',
          field: 'gold',
          sort: 'asc',
          width: 100
        }
      ],
      rows: [
        {
          champion: '요릭',
          win: 'London',
          playnum: '21',
          score: '2009/02/27',
          cs: '$103',
          gold: '12'
        }
      ]
  }
}

componentDidMount(){
      let url = "http://ddragon.leagueoflegends.com/cdn/6.24.1/data/ko_KR/champion.json"
      axios.get(url)
      .then((res)=>{
          this.state.name = res.data
          console.dir(this.state.name)
      })
      .catch(e=>{
          alert('실패')
      })
}
   
  render(){
    return(
      <MDBRow center>
        {console.log(this.state.LOLDB)}
      <MDBDataTable  className="white col-md-10"
        data="http://ddragon.leagueoflegends.com/cdn/6.24.1/data/ko_KR/champion.json"
        striped
        bordered
        hover
        data={this.data}
      />
      </MDBRow>
    )
  }
}



export default DatatablePplaynum;