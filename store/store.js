import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

// Créez un contexte pour le store
export const StoreContext = createContext();

// Définissez le composant du StoreProvider qui enveloppera votre application
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
