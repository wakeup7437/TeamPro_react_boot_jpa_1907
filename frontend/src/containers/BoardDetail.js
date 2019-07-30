import React,{useState,useEffect} from 'react'
import {MDBInput,MDBContainer,MDBCard,MDBCardBody,MDBCardFooter,MDBCardHeader,MDBRow,MDBCol,MDBListGroup,MDBListGroupItem,MDBBtn} from 'mdbreact'
import axios from 'axios'
import {connect} from 'react-redux'
import {boardModify} from '../actions'

const BoardDetail=(props)=>{
    const {bno}=props.match.params
    const [data,setData]=useState({})
    const [rlist,setList]=useState([])
    const serverURL='http://localhost:8080'
    
    //init
    useEffect(()=>{
    let url = "http://localhost:8080/board/detail/"+bno
    axios.get(url)
    .then((d)=>{
        console.log(d.data)
        d.data.regdate=d.data.regdate.split('T')[0]
        setData(d.data)
        const list=d.data.replies.map(
        (v,i)=>
            <MDBListGroupItem key={i}>
                <MDBRow className="d-flex justify-content-between">
                    <div>{v.replyer}</div>
                    <div>{v.replydate.split('T')[0]}</div>
                </MDBRow>
                <MDBRow className="d-flex">
                <h6>{v.reply}</h6>
                </MDBRow>
            </MDBListGroupItem>
        )
        setList(list)
        console.dir(d.data.replies)
        
    })
    .catch(e=>{
        alert("data not found")
        props.history.push('/')
    })
    },[])//init end

    const btnDel=()=>{
        console.dir(props)
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
    const isMyBoard=()=>{
        if(props.login){
            if(props.userinfo.userName==data.writer){
                return(
                    <>
                    <MDBBtn color="primary" onClick={btnModifyOn} >Modify</MDBBtn>
                    <MDBBtn color="danger" onClick={btnDel} >Delete</MDBBtn>
                    </>
                )
            }
        }else return ''
        
    }
    let replyInput=null
    const addReply=()=>{
        let data={
            reply:replyInput.state.innerValue,
            replyer:data.writer,
            bno:bno
        }
        axios.post(serverURL+'/reply/insert',data)
        .then((r)=>{
            alert('댓글 추가 성공')
            props.history.replace('/detail/'+bno)
        })
        .catch((e)=>{
            alert('댓글 추가 실패')
        })
    }
    
    return (
    <MDBContainer>
        <MDBCard>
            <MDBCardHeader className="text-left">
                <div className="d-block p-2 bg-primary text-white">
                    <h2>{data.title}</h2>
                </div>
                <MDBRow>
                    <MDBCol size="6">bno {data.bno}</MDBCol>
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
            {isMyBoard()}
        </MDBCardFooter>
        
        </MDBCard>
        <br/>
        <MDBListGroup>
            <MDBCardHeader className="p-3 text-left bg-white">
                <MDBRow><h3>Replies </h3> <label className="p-2">total{rlist.length}</label> </MDBRow>
                {props.login?
                <MDBCard>
                <MDBRow className="align-items-center" center>
                    <MDBCol sm="8">
                        <MDBInput 
                            hint="Add reply..."
                            id="add"
                            ref={ref => {
                                replyInput = ref;
                              }}
                        />
                    </MDBCol>
                    <MDBCol sm="3">
                        <MDBBtn
                        className=""
                        outline 
                        color="primary"
                        onClick={addReply}
                        >Add Reply</MDBBtn>
                    </MDBCol>
                </MDBRow>
                </MDBCard>
                :''}
            </MDBCardHeader>
            {rlist}
        </MDBListGroup>
    </MDBContainer>
    )
}
const mapStateToProps = (state) =>{
    return state.login
  }
export default connect(mapStateToProps)(BoardDetail)