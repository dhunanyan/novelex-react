import HERO_DATA from "./hero.data";

const INITIAL_STATE = {
  heros: HERO_DATA,
};

const heroReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default heroReducer;
