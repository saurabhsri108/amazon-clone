export const initialState = {
  basket: [],
  savedBasket: [],
  user: null,
};

export const subtotal = (basket) =>
  basket?.reduce(
    (total, item) => total + parseFloat(item.amount.replaceAll(',', '')),
    0.0
  );

export const totalItems = (basket) => basket?.length;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [action.item, ...state.basket],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) newBasket.splice(index, 1);
      else console.warn(`Cannot remove id: ${action.id} as its not in basket`);

      return {
        ...state,
        basket: newBasket,
      };

    case 'REMOVE_FROM_SAVED_BASKET':
      const index2 = state.savedBasket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket2 = [...state.savedBasket];

      if (index2 >= 0) newBasket2.splice(index2, 1);
      else console.warn(`Cannot remove id: ${action.id} as its not in basket`);

      return {
        ...state,
        savedBasket: newBasket2,
      };

    case 'SAVE_FOR_LATER':
      return {
        ...state,
        savedBasket: [action.newBasket, ...state.savedBasket],
      };

    case 'MOVE_TO_CART':
      console.log(action.newBasket);
      return { ...state, basket: [action.newBasket, ...state.basket] };

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
