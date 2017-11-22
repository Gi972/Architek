import createStore from "redux-zero";

const initialState = { firstname:"", lastname:"", auth:false };
const store = createStore(initialState);

export default store;