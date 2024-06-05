export const initialState = {
    basket: [],
    user: null,
    address: {}
};

export const getBasketTotal = (basket) => 
  basket.reduce((amount, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
    console.log(`Item: ${item.title}, Price: ${item.price}, Parsed Price: ${itemPrice}`);
    return isNaN(itemPrice) ? amount : amount + itemPrice;
  }, 0);


const reducer = (state, action) => {
    console.log("action  >>>>", action);
    
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if(index >= 0)
            {
                newBasket.splice(index,1);
            }
            else{
                console.warn(`
                    can't remove product id ${action.id}
                `);
            }
            return {
                ...state,
                basket: newBasket,
            };
        case "SET_ADDRESS":
            return {
                ...state,
                address:{...action.item}
            };
        default:
            return state;
    }
}

export default reducer;
