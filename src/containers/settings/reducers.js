function settings(state = {}, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      // console.log(action);
      return state;
    default:
      return state;
  }
}

export default settings;
