const initalState = {
  items: [],
};
export const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      //kiểm tra sản phẩm có trong giỏ hàng chưa
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      console.log("reducer ", product.id)
      if (existingProduct) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }],
        };
      }
    default:
      return state;
  }
};
