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

export const recommendations = (id) => async (dispatch) => {
    const res = await fetch(`http://localhost:3002/recommendations`)
    const data = await res.json()
    const productStringify = JSON.stringify(data)
    let product = JSON.parse(productStringify)
    product = product.find(product => product.product_id == id)
    const recommendations = await mappedRecommendations(product)
    console.log(recommendations)
    return dispatch({
        type: 'RECOMMENDATIONS',
        payload: recommendations
    })
}
const mappedRecommendations = async (product) => {
    const res = await fetch(`http://localhost:3002/products`)
    const data = await res.json()
    const productsRecommended = product.recommendations.map(id => data?.find(product => product.product_id == id))
    return productsRecommended
}

export const categories = () => async (dispatch) => {
    const res = await fetch(`http://localhost:3002/categories`)
    const data = await res.json()
    console.log(data)
    return dispatch({
        type: 'CATEGORIES',
        payload: data
    })
}

    

