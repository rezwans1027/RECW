import { createSelector } from "@reduxjs/toolkit";


export const selectUser = (state) => state.user.currentUser;

// Memoized selector using createSelector for better performance
export const selectCurrentUser = createSelector(
    [selectUser],
    (currentUser) => currentUser
);

