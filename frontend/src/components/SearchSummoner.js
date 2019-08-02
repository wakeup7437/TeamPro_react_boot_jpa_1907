import React,{Component} from 'react'
import axios from 'axios'
import {MDBListGroupItem,MDBListGroup,MDBRow,MDBCol,MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardHeader} from 'mdbreact'
import {connect} from 'react-redux'

class SearchSummoner extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[{
                "lane": "TOP",
                "gameId": 3672377334,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558505468807,
                "queue": 420,
                "role": "SOLO",
                "season": 13
            },
            {
                "lane": "MID",
                "gameId": 3672343857,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558503136951,
                "queue": 420,
                "role": "SOLO",
                "season": 13
            },
            {
                "lane": "NONE",
                "gameId": 3672312852,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558502387003,
                "queue": 420,
                "role": "DUO",
                "season": 13
            },
            {
                "lane": "NONE",
                "gameId": 3672360798,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558500858763,
                "queue": 420,
                "role": "DUO_SUPPORT",
                "season": 13
            },
            {
                "lane": "NONE",
                "gameId": 3672179250,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558499509969,
                "queue": 420,
                "role": "DUO_SUPPORT",
                "season": 13
            },
            {
                "lane": "MID",
                "gameId": 3672153427,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558493628798,
                "queue": 420,
                "role": "SOLO",
                "season": 13
            },
            {
                "lane": "MID",
                "gameId": 3672142165,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558491914682,
                "queue": 420,
                "role": "SOLO",
                "season": 13
            },
            {
                "lane": "NONE",
                "gameId": 3671585177,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558452777288,
                "queue": 420,
                "role": "DUO_SUPPORT",
                "season": 13
            },
            {
                "lane": "MID",
                "gameId": 3671559205,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558450707874,
                "queue": 420,
                "role": "SOLO",
                "season": 13
            },
            {
                "lane": "MID",
                "gameId": 3671552002,
                "champion": 26,
                "platformId": "KR",
                "timestamp": 1558448359410,
                "queue": 420,
                "role": "SOLO",
                "season": 13
            }],
            user:{}
        }
    }
    sname=this.props.match.params.sname
    url = 'http://localhost:8080'
    test=''

    componentDidMount(){
        axios.get(this.url+'/lol/search/'+this.sname)
        .then(d=>{
            console.log(d.data)
            //console.log(d.data.tier)
            this.setState({
                user:d.data
            })
            console.log(this.state.user)
            console.log(this.state.data)
        })
        .catch(e=>{
            console.log(e)
        })
        
        
    }
    // test=()=>{
    //     let d=this.state.data
    //     for(let v in d){
    //         // console.log(v+':'+d[v])
    //         // console.dir(v)
    //         d.push(<div key={v}>test</div>)
    //     }
    //     return d
    // }
    render(){
        console.dir(this.state.data)
        //this.test()
        const user=this.state.user
        const rate=Math.round(user.wins*100/(user.wins+user.losses))
        const data=this.state.data
        const now=Date.now()
        const test=data.map((v,i)=>
        <MDBListGroupItem key={i}>
            <MDBRow>
                <MDBCol size="2">
                <div>
                {Math.round((now-v.timestamp)/1000/60/60/24)}일 전
                </div>
                <div>dddd</div>
                </MDBCol>
                <MDBCol size="8">
                    <div>
                    {/*v.match.participants[0].teamId*/}body
                </div>
                </MDBCol>
                <MDBCol size="2">
                <div>
                <tr><td>A</td><td>a</td></tr>
                <tr>b</tr>
                <tr>c</tr>
                <tr>d</tr>
                <tr>r</tr>
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
                <MDBCardImage className="" src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/${user.profileIconId}.png`} waves/>
                <MDBCardBody>
                <MDBCardTitle>{user.tier}_{user.rank}</MDBCardTitle>
                <MDBCardText>
                    LP {user.leaguePoints}<br/>
                    wins {user.wins} / losses {user.losses}<br/>
                    rate:{rate}
                </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol md="7">
            <MDBListGroup>
                {test}
            </MDBListGroup>
        </MDBCol>
        </MDBRow>
        </>
        )
    }
}
export default connect()(SearchSummoner)