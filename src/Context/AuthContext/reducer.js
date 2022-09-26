// reducer related to auth state;

export function reducer(state, action) {
    switch (action.type) {
        case "LOGIN_REQUEST": {
            return {
                ...state,
                isAuth: false,
                token: null,
                isError: false,
                isLoading: true,
                data: [],
                isDataLoading: false,
            }
        }
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                isAuth: true,
                token: action.payload.token,
                isError: false,
                isLoading: false,

                isDataLoading: false,
            }
        }
        case "LOGIN_FAILURE": {
            return {
                ...state,
                isAuth: false,
                token: null,
                isError: true,
                isLoading: false,

                isDataLoading: false,
            }
        }
        case "GET_PRODUCTS_REQUEST": {
            return {
                ...state,


                isError: false,
                isLoading: true,

                isDataLoading: true,
            }
        }
        case "GET_PRODUCTS_SUCCESS": {
            return {
                ...state,


                isError: true,
                isLoading: false,
                data: action.payload,
                isDataLoading: false,
            }
        }
        case "GET_PRODUCTS_FAILURE": {
            return {
                ...state,


                isError: true,
                isLoading: false,

                isDataLoading: false,
            }
        }
        default: {
            return state
        }
    }
}

export default reducer

