import React,{Component} from 'react'
import {} from 'mdbreact'
import axios from 'axios'

class BoardDetail extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        // let url = "http://localhost:8080"
        // axios.get(url+'/board/detail')
        // .then((d)=>{})
        // .catch(e=>{})
         console.log(this.props.match)
    }

    render(){
        return <div>detail..{this.props.match.params.bno}</div>
    }
}

export default BoardDetail