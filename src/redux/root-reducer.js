import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import directoryReducer from "./directory/directory.reducer";
import sectionsReducer from "./sections/sections.reducer";
import userReducer from "./user/user.reducer";
import cardsReducer from "./cards/cards.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["card"],
};

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  pages: sectionsReducer,
  cardsCollection: cardsReducer,
});

export default persistReducer(persistConfig, rootReducer);
