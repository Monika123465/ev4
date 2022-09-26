// reducer related to cart state;

// reducer related to auth state;

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_CART": {
            return {
                data: [...state.data, action.payload]
            }
        }

        default: {
            return state
        }
    }
}

export default reducer
