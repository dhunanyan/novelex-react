import { createSelector } from "reselect";

const selectHero = (state) => state.hero;

export const selectHeroSections = createSelector(
  [selectHero],
  (hero) => hero.heros
);
