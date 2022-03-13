import { createSelector } from 'reselect';

// input selector(a function not using createSelector)
const selectCart = (state) => state.cart;

// output selector(a function using createSelector and input selectors)
export const selectCartItems = createSelector(
  // 1st param of createSelector is an array of input selectors
  [
    selectCart,
    // userSelector
  ],
  // 2nd param is a function how we want to handle the result
  (
    cart,
    // user
  ) => cart.cartItems,
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0),
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);
