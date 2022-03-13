import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrectUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);
