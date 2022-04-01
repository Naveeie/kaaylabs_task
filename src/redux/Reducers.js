const initialState = {
    details : [{}]
}

export const reducerFunction = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_DETAILS':
            return {
                ...state,
                details : action.payload
            }
        default :
            return state
    }
    
}