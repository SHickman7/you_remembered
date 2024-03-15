const recipientReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RECIPIENT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // Occasion will be on the redux state at:  state.occasion
  export default recipientReducer;