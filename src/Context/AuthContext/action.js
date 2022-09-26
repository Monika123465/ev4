// action creators related to auth state;
export const initialvalue={
    isAuth:false,
    token:null,
    isError:false,
    isLoading:false,
    data:[],
    isDataLoading:false,
};
export const dataLoadingAction={type:"GET_PRODUCTS_REQUEST"}

export const dataSuccessAction={type:"GET_PRODUCTS_SUCCESS"}
export const dataFailureAction={type:"GET_PRODUCTS_FAILURE"}
export const loginLoadingAction={type:"LOGIN_REQUEST"}
