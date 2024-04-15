import {createStore} from "redux";
//import {configureStore} from "@reduxjs/toolkit";
import reducer from "../store/reducer";


export default createStore(reducer);
//export default configureStore(reducer);