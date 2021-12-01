const initialState ={
    text:'see more',
    isDisplay:false,
    height:''
}
const  showHideReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MORE':
            return {...state,text:'see less',isDisplay:true,height:'100%'}
        case 'SHOW_LESS':
            return {...state,text:'see more',isDisplay:false,height:'min-content'}
        default: return initialState
    }
}
export default showHideReducer