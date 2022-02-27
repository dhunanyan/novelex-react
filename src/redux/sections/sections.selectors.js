import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectPages = (state) => state.pages;

export const selectSections = createSelector(
  [selectPages],
  (pages) => pages.sections
);

export const selectSectionsForPreview = createSelector(
  [selectSections],
  (sections) =>
    sections ? Object.keys(sections).map((key) => sections[key]) : []
);

export const selectSection = memoize((sectionUrlParam) =>
  createSelector([selectSections], (sections) =>
    sections ? sections[sectionUrlParam] : null
  )
);

export const selectIsSectionFetching = createSelector(
  [selectPages],
  (pages) => pages.isFetching
);

export const selectIsSectionLoaded = createSelector(
  [selectPages],
  (pages) => !!pages.sections
);
