import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import directoryReducer from "./directory/directory.reducer";
import heroReducer from "./hero/hero.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  hero: heroReducer,
});

export default persistReducer(persistConfig, rootReducer);
