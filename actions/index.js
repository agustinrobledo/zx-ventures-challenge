export const addToCart = (product) => async (dispatch) => {
    
    return dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
}
export const removeFromCart = (product) => async (dispatch) => {
    return dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })
}
