import { combineReducers } from "redux";
import registerReducer from "./register.reducer";
import loginReducer from "./login.reducer";
import stockReducer from "./stock.reducer";
import shopReducer from "./shop.reducer";
import transactionReducer from "./transaction.reducer";

export default combineReducers({ registerReducer,loginReducer,stockReducer,shopReducer,transactionReducer });