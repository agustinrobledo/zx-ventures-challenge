const initialState = {
    products: [],
    recommendations: [],
    categories: [],
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        return {...state,
            products: [...state.products, action.payload]
        }
        case 'REMOVE_FROM_CART':
        return {...state,
            products: state.products.filter(product => product.product_id !== action.payload.product_id)
        }
        case 'RECOMMENDATIONS':
        return {...state,
            recommendations: action.payload
        }
        case 'CATEGORIES':
        return {...state,
            categories: action.payload
        }
        default:
        return state;
    }
    }
  
  export default rootReducer;
  