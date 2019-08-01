import React,{Component} from 'react'
import axios from 'axios'
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn,MDBCardHeader} from 'mdbreact'
import {connect} from 'react-redux'

class SearchSummoner extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
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
                data:d.data.matches,
                user:d.data.user
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
        //const list=this.state.data.map((v,i)=>{})
        //const list=this.test()
        const now=Date.now()
        const test=data.map((v,i)=>
        <div key={i}>{Math.round((now-v.timestamp)/1000/60/60/24)}일 전</div>
        )
        
        return(
        <>
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
            {test}
        </>
            )
    }
}
export default connect()(SearchSummoner)