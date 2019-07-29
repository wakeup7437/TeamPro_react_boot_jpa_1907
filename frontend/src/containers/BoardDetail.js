import React,{useState,useEffect} from 'react'
import {MDBContainer,MDBCard,MDBCardBody,MDBCardFooter,MDBCardHeader,MDBRow,MDBCol,MDBListGroup,MDBListGroupItem,MDBBtn} from 'mdbreact'
import axios from 'axios'
import {connect} from 'react-redux'
import {boardModify} from '../actions'

const BoardDetail=(props)=>{
    const {bno}=props.match.params
    const [data,setData]=useState({})
    const [list,setList]=useState([])
    const {userinfo} = props
    const {writer} =userinfo
    useEffect(()=>{
    let url = "http://localhost:8080/board/detail/"+bno
    axios.get(url)
    .then((d)=>{
        console.log(d.data)
        d.data.regdate=d.data.regdate.split('T')[0]
        setData(d.data)
        const x=d.data.replies.map(
        (v,i)=>
            <MDBListGroupItem key={i}>
                <MDBRow className="d-flex justify-content-between">
                    <div>{v.replyer}</div>
                    <div>{v.replydate}</div>
                </MDBRow>
                <MDBRow className="d-flex">
                <h5>{v.reply}</h5>
                </MDBRow>
                
            </MDBListGroupItem>)
        setList(x)
        
    })
    .catch(e=>{
        alert("data not found")
        props.history.push('/')
    })
    },[])

    const btnDel=()=>{
        console.dir(props.userinfo)
        let flag=window.confirm('Are You Sure?')
        if(flag){
            window.alert('yes')
            axios.delete("http://localhost:8080/board/delete/"+bno)
            .then(r=>{
                if(r){ 
                    alert('success')
                    props.history.push('/boards')
                }
                else alert('fail to server')
            })
            .catch(e=>{
                alert('exeption : '+e)
            })
        }
    }
    const btnModifyOn=()=>{
        console.log("then then")
        console.dir(data)
        props.dispatch(boardModify(data))
        props.history.push("/modify/"+bno)
        
    }
    return (
    <MDBContainer>
        <MDBCard>
            <MDBCardHeader className="text-left">
                <div className="d-block p-2 bg-primary text-white">
                    <h2>{data.title}</h2>
                </div>
                <MDBRow>
                    <MDBCol size="6">rno {data.bno}</MDBCol>
                    <MDBCol size="6">regdate {data.regdate}</MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="6">cate:{data.category}</MDBCol>
                    <MDBCol size="6">writer: {data.writer}</MDBCol>
                </MDBRow>
            </MDBCardHeader>
        <MDBCardBody className="">
            {data.content}
        </MDBCardBody>
        <MDBCardFooter>
            {writer?<div>
            <MDBBtn color="primary" onClick={btnModifyOn} >Modify</MDBBtn>
            <MDBBtn color="danger" onClick={btnDel} >Delete</MDBBtn>
            </div>:''}
        </MDBCardFooter>
        
        </MDBCard>
        <br/>
        <MDBListGroup>
            <MDBCardHeader className="p-3 text-left bg-white">
                <MDBRow><h3>Replies </h3> <label className="p-2">total{list.length}</label> </MDBRow>
            </MDBCardHeader>
            {list}
        </MDBListGroup>
    </MDBContainer>
    )
}
const mapStateToProps = (state) =>{
    return state.login
  }
export default connect(mapStateToProps)(BoardDetail)