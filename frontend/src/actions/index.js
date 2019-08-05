export const login = (info) => {
    return {
        type:'LOG_IN',
        login:true,
        userinfo: info
    }
}
export const logout = () =>{
    return {
        type:'LOG_OUT',
        login:false
    }
}
export const boardModify = (data)=>{
    return {
        type:'BOARD_MODIFY',
        bmodify:true,
        prevdata:data
    }
}
