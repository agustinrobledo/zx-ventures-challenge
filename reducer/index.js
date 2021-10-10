const initialState = {
    products: [],
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        return {...state,
            products: [...state.products, action.payload]
        }
        case 'REMOVE_FROM_CART':
        return { 
            products: state.products.filter(product => product.id !== action.payload.id)
        }
        default:
        return state;
    }
    }
  
  export default rootReducer;
  