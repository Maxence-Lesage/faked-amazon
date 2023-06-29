import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const initialState = {
        categories: {},
        token: '',
        profile: {},
        basket: {}
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};
