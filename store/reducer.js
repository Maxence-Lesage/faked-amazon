export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        case 'SET_TOKEN':
            return { ...state, token: action.payload };
        case 'SET_PROFILE':
            return { ...state, profile: action.payload };
        case 'SET_BASKET':
            return { ...state, basket: action.payload };
        default:
            return state;
    }
};

export default reducer;