const initialState = {
    firstState:'From Redux'
}

const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "first_action":
          return { ...state, ...{ firstState: action.data } };
        default:
          return state;
        }
      };

export default demoReducer