import React,{Component} from 'react'
class SearchSummoner extends Component{
    constructor(props){
        super(props)
    }
    sname=this.props.match.params.sname

    
    render(){
        console.log(this.props.match.params.sname)
        console.log(this.sname)
        return(
        <div>{this.sname}</div>
            )
    }
}
export default SearchSummoner