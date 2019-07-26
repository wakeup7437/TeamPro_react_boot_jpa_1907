import React,{useState,useEffect} from 'react'
import {MDBContainer,MDBCard,MDBCardBody,MDBCardFooter,MDBCardHeader,MDBRow,MDBCol,MDBListGroup,MDBListGroupItem,MDBBtn,MDBModal,MDBModalHeader,MDBModalBody,MDBModalFooter} from 'mdbreact'
import axios from 'axios'

const BoardDetail=(props)=>{
    const {bno}=props.match.params
    const [data,setData]=useState({})
    const [list,setList]=useState([])
    const [modal,setModal]=useState(false)

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
    .catch(e=>{})
    },[])

    const saveModify=()=>{
        console.log('save')
        setModal(false)
    }
    const btnDel=()=>{
        let flag=window.confirm('Are You Sure?')
        if(flag){
            window.alert('yes')
        }
    }
    const btnModify=()=>{
        setModal(true)
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
            </MDBCardHeader>
        <MDBCardBody className="">
            {data.content}
        </MDBCardBody>
        <MDBCardFooter>
            <MDBBtn color="primary" onClick={btnModify} >Modify</MDBBtn>
            <MDBBtn color="danger" onClick={btnDel} >Delete</MDBBtn>
        </MDBCardFooter>
        
        </MDBCard>
        <br/>
        <MDBListGroup>
            <MDBCard>

            </MDBCard>
            {list}
        </MDBListGroup>


        <MDBModal isOpen={modal} toggle={()=>setModal(false)} size="lg">
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
        
        
    </MDBContainer>
    )
}

export default BoardDetail