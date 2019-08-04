import React,{Component} from 'react'
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
                <div key={i}>
                    <div>{i+1}</div>
                    <div>name: {v.summonerName}</div>
                    <img src=''/>
                    <div>승률: {Math.round((v.wins/(v.wins+v.losses))*100)}</div>
                </div>
            )
            this.setState({load:true})
        })
        .catch(e=>{
            alert(e)
        })
    }

    render(){
        return (
            <div>rank page<div>{this.list}</div></div>
        )
    }
}
export default Rankpage