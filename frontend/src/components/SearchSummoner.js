import React,{Component, Suspense} from 'react'
import axios from 'axios'
import {MDBBtn,MDBListGroupItem,MDBListGroup,MDBRow,MDBCol,MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardHeader} from 'mdbreact'
import {connect} from 'react-redux'
import Champion from '../assets/Champion'

class SearchSummoner extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            user:{}
        }
    }
    load=false
    sname=this.props.match.params.sname
    champimgsrc='http://ddragon.leagueoflegends.com/cdn/9.15.1/img/champion/'

    componentDidMount(){
        axios.get('/lol/search/'+this.sname)
        .then(d=>{
            console.log(d.data)
            //console.log(d.data.tier)
            this.setState({
                user:d.data,
                accountId:d.data.accountId,
            })
            console.log(this.state.user)
            axios.get('/lol/list/'+d.data.accountId+'?startIndex=0')
            .then(d2=>{
                console.dir(d2.data)
                this.load=true
                this.setState({
                    data:d2.data.matches,
                    startIndex:d2.data.endIndex+1
                })
                console.log(d2.data.endIndex+1)
                console.log(this.state.startIndex)
            })
        })
        .catch(e=>{
            console.log(e)
        })
    }
    loadMoreList=()=>{
        //alert('loadmorelist')
        this.load=false
        axios.get('/lol/list/'+this.state.accountId+'?startIndex='+this.state.startIndex)
        .then((d)=>{
          //console.log(d.data)
          //console.log('more....')
            this.load=true
            let d2=this.state.data.concat(d.data.matches)
            //console.dir(d2)
            this.setState({
                data:d2,
                startIndex:d.data.endIndex+1
            })
            //console.dir(this.state.data)
        })
        .catch((e)=>{
            alert(e)
        })
    }
    innerList=(d,i)=>{
        if(!this.load) return null
        let arr=[]
        for(let v=0+i;v<5+i;v++){
            // console.log(v+':'+d[v])
            // console.dir(v)
            let champ=Champion(d[v].champ)
            let srcurl=this.champimgsrc+champ+'.png'
            arr.push(<div key={v} font-size="xx-small"><img className="rounded-circle" src={srcurl} width='21px'></img>{d[v].name}</div>)
        }
        return arr
    }
    innerBody=(d)=>{
        if(!this.load) return null
        else{
            return(
                <table>
                    <thead>
                    <tr>
                        <th>K /</th>
                        <th>D /</th>
                        <th>A</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{d.kills} /</td>
                        <td>{d.deaths} /</td>
                        <td>{d.assists}</td> 
                    </tr>
                    </tbody>
                </table>
            )
        }
    }
    render(){
        console.dir(this.state.data)
        //this.test()
        const user=this.state.user
        const rate=Math.round(user.wins*100/(user.wins+user.losses))
        const now=Date.now()
        const matchlist=this.state.data.map((v,i)=>
        <MDBListGroupItem key={i} color={v.win?"primary":"danger"}>
            <MDBRow>
                <MDBCol size="2">
                <div>
                {Math.round((now-v.timestamp)/1000/60/60/24)}일 전
                </div>
                <div>
                    {Math.round(v.gameDuration/60)}분
                </div>
                <div>
                    {v.win?'승리':'패배'}
                </div>
                </MDBCol>
                <MDBCol size="2">
                    <img className="rounded-circle" src={this.champimgsrc+Champion(v.champion)+'.png'} width='50px'></img>
                    <div>{Champion(v.champion)}</div>
                </MDBCol>
                <MDBCol size="2">
                    <div>
                        {this.innerBody(v.stat)}
                    </div>
                </MDBCol>
                <MDBCol size="3">
                <div>
                {this.innerList(v.teams,0)}
                </div>
                </MDBCol>
                <MDBCol size="3">
                <div>
                {this.innerList(v.teams,5)}
                </div>
                </MDBCol>
            </MDBRow>
        </MDBListGroupItem>
        )
        
        return(
        <>
        <MDBRow center>
        <MDBCol md="4">
            <MDBCard style={{ width: "15rem" }}>
                <MDBCardHeader>
                    {user.name} LV_{user.summonerLevel}
                </MDBCardHeader>
                <MDBCardImage top src={`http://ddragon.leagueoflegends.com/cdn/9.15.1/img/profileicon/${user.profileIconId}.png`} waves/>
                <MDBCardBody>
                <MDBCardTitle>{user.tier}_{user.rank}</MDBCardTitle>
                <MDBCardText>
                    LP {user.leaguePoints}<br/>
                    Wins {user.wins} / Losses {user.losses}<br/>
                    Rate:{rate}%
                </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol md="7" font-size="xx-small">
            <MDBListGroup>
                <Suspense fallback={<div>loading...</div>}>
                {this.load?
                    <>{matchlist}<MDBListGroupItem><MDBBtn color="blue" outline block onClick={()=>this.loadMoreList()}>더보기</MDBBtn></MDBListGroupItem></>
                    :<MDBListGroupItem><div className="spinner-border text-info" role="status"/></MDBListGroupItem>}
                </Suspense>
                
            </MDBListGroup>
        </MDBCol>
        </MDBRow>
        </>
        )
    }
}
export default connect()(SearchSummoner)