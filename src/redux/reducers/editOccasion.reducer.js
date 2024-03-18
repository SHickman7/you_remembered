
const editOccasionReducer = (state = {}, action) => {
    if(action.type === 'SET_EDIT_OCCASION') {
        return action.payload;
    } else if (action.type === 'EDIT_ONCHANGE') {
        return {
            ...state,
            occasion_name : action.payload.value,
            //[action.payload.property] : action.payload.value
            //'github_name' : action.payload.value
        }
    } else if (action.type === 'EDIT_CLEAR') {
        return {}
    }
    return state;
}
  
  // Occasion will be on the redux state at:  state.occasion
  export default editOccasionReducer;