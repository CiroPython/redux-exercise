import Users from "../models/users";

export const SET_USERS = "SET_USERS";
export const SET_CITY = "SET_CITY";
export const fetchUser = () => {
  return async dispatch => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );
    const resData = await response.json();
    let items = resData;

    const loadUser = [];
    const city = [];
    items.map(item => {
        city.push({text:item.address.city,value:item.address.city});
        loadUser.push(
        new Users(
          item.id,
          item.name,
          item.username,
          item.email,
          [item.address],
          item.phone,
          item.website,
          item.company
        )
      );
     return null; 
    });
    dispatch({ type: SET_CITY, cityArr: city });
    dispatch({ type: SET_USERS, users: loadUser });
  };
};
