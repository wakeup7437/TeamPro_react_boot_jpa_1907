const boardReducer = (state = {bmodify:false}, action) => {

    if(action.type === 'BOARD_MODIFY'){
        console.log('MODIFY_')
        console.log(action)
        console.log(state)
        state= Object.assign({},state,action)
        // return {
            
        //     ...state,
        //     ...action
        // }
        console.log(state)
    }
    return state;
}

export default boardReducer