import React,{Component} from 'react'
import { MDBTable, MDBTableBody, MDBTableHead ,MDBRow,MDBContainer,MDBBtn } from 'mdbreact';
import Axios from 'axios';
class Rankpage extends Component{
   constructor(){
       super()
       this.state={load:false}
   }
   componentDidMount(){
       Axios.get('/lol/rank')
       .then((d)=>{
           console.dir(d.data)
           this.list=d.data.map((v,i)=>
               <tr key={i}>
                   <td>{i+1}위</td>
                   <td onClick={()=>this.props.history.push('/lol/search/'+v.summonerName)}><MDBBtn color="blue" outline block>{v.summonerName}</MDBBtn></td>
                   <td>{v.tier}</td>
                   <td>{v.leaguePoints} LP</td>
                   <td>{v.wins}승 {v.losses}패  ({Math.round((v.wins/(v.wins+v.losses))*100)}%)</td>
               </tr>
           )
           this.setState({load:true})
       })
       .catch(e=>{
           alert(e)
       })
   }
   render(){
       return (
           <MDBRow center>
               <MDBContainer className="white col-md-10 "  >
                   <MDBTable  bordered striped small>
                       <MDBTableHead color="dark-color">
                           <tr>
                           <th width="1%">순위</th>
                           <th width="3%">소환사명</th>
                           <th width="5%">티어</th>
                           <th width="3%">리그포인트</th>
                           <th width="2%">승률</th>
                           </tr>
                       </MDBTableHead >
                       <MDBTableBody>
                           {this.list}
                       </MDBTableBody>
                   </MDBTable>
               </MDBContainer>
         </MDBRow>
       )
   }
}
export default Rankpage