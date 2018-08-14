export const initialState = {
  stashpointsData: []
};

export const updateState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STASHPOINTS':
      return Object.assign({}, state, {
        stashpointsData: action.stashpointsData
      });
    default:
      return state;
  }
};
