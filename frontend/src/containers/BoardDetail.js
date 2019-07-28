import React,{useState,useEffect} from 'react'
import {MDBContainer,MDBCard,MDBCardBody,MDBCardFooter,MDBCardHeader,MDBRow,MDBCol,MDBListGroup,MDBListGroupItem,MDBBtn} from 'mdbreact'
import axios from 'axios'
import {connect} from 'react-redux'
import {boardModify} from '../actions'

const BoardDetail=(props)=>{
    const {bno}=props.match.params
    const [data,setData]=useState({})
    const [list,setList]=useState([])

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
                {v.rno} | {v.replyer} | {v.reply} | {v.replydate}
            </MDBListGroupItem>)
        setList(x)
        
    })
    .catch(e=>{
        alert("data not found")
        props.history.push('/')
    })
    .then(()=>{
        
        
    })
    },[])

    const btnDel=()=>{
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
                    <MDBCol size="6">rno {data.bno}|cate:{data.category}</MDBCol>
                    <MDBCol size="6">regdate {data.regdate}</MDBCol>
                </MDBRow>
            </MDBCardHeader>
        <MDBCardBody className="">
            {data.content}
        </MDBCardBody>
        <MDBCardFooter>
            <MDBBtn color="primary" onClick={btnModifyOn} >Modify</MDBBtn>
            <MDBBtn color="danger" onClick={btnDel} >Delete</MDBBtn>
        </MDBCardFooter>
        
        </MDBCard>
        <br/>
        <MDBListGroup>
            <MDBCardHeader className="d-block p-3 text-left bg-white">
                <div><h3>Replies </h3>total {list.length}</div>
            </MDBCardHeader>
            {list}
        </MDBListGroup>
        {/* <MDBModal isOpen={modal} toggle={()=>setModal(false)} size="lg">
            <MDBModalHeader>MDBModal title</MDBModalHeader>
            <MDBModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={()=>setModal(false)}>Close</MDBBtn>
                <MDBBtn color="primary"onClick={saveModify}>Save changes</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
         */}
        
    </MDBContainer>
    )
}

export default connect()(BoardDetail)