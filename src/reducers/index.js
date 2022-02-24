let USERS = [];
let CITYARR= [];
export const SET_CITY = "SET_CITY";
export const SET_USERS = "SET_USERS";
const initialState = {
    users: USERS, 
    cityArr: CITYARR,
  };
  const state = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS:
        return { ...state, users: action.users };
      case SET_CITY:
          return {...state, cityArr: action.cityArr};
      default:
        return state;
    }
  };
  
  export default state;