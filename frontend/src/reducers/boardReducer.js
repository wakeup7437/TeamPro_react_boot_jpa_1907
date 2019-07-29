const boardReducer = (state = {bmodify:false}, action) => {

    if(action.type === 'BOARD_MODIFY'){
        console.log('MODIFY_')
        console.log(action)
        return {
            ...state,
            ...action
        }
    }
    return state;
}

export default boardReducer