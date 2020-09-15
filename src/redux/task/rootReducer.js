import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import taskReducer from "./task.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["task"],
};

const rootReducer = combineReducers({
  task: taskReducer,
});

export default persistReducer(persistConfig, rootReducer);
