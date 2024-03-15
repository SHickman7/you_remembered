const occasionReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_OCCASION':
        return action.payload;
      default:
        return state;
    }
  };
  
  // Occasion will be on the redux state at:  state.occasion
  export default occasionReducer;