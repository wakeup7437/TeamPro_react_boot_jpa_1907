import React,{Component} from 'react'
import axios from 'axios'
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn,MDBCardHeader} from 'mdbreact'
import {connect} from 'react-redux'

class SearchSummoner extends Component{
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }
    sname=this.props.match.params.sname
    url = 'http://localhost:8080'
    test=''

    componentDidMount(){
        axios.get(this.url+'/lol/search/'+this.sname)
        .then(d=>{
            console.log(d.data)
            console.log(d.data[0].tier)
            this.setState({
                data:d.data[1]
            })
            this.test=d.data[1]
            console.log(this.test)
            console.log(this.state.data)
        })
        .catch(e=>{
            console.log(e)
        })
        
        
    }
    // test=()=>{
    //     let d=this.state.data
    //     for(let v in d){
    //         console.log(v+':'+d[v])
    //         console.dir(v)
    //     }
    // }
    render(){
        console.dir(this.state.data)
        //this.test()
        const {data}=this.state
        return(
        <>
            <MDBCard style={{ width: "15rem" }}>
                <MDBCardHeader>
                    {data.summonerName}
                </MDBCardHeader>
                <MDBCardImage className="img-fluid" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" waves />
                <MDBCardBody>
                <MDBCardTitle>{}{data.tier}_{data.rank}</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </>
            )
    }
}
export default connect()(SearchSummoner)