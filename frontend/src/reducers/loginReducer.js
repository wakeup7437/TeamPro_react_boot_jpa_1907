const loginReducer = (state = {login:false}, action) => {

    if(action.type === 'LOG_IN'){
        console.log("LOG_IN")
        console.log(action)
        return{
            ...state,...action
        }
    }else if(action.type === 'LOG_OUT'){
        console.log('LOG_OUT')
        return{
            ...state,...action
        }
    }
    return state
}

export default loginReducer