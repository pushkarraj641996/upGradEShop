import { legacy_createStore as createStore } from "redux";
import rootReducer from "../Reducer/RootReducer";

export default createStore(rootReducer);
