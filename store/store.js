import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const initialState = {
        categories: {},
        token: '',
        profile: { name: 'Jhon', surname: 'Doe', email: 'doe@example.xyz', phone: '0125659876', address: { street: 'Main Street', number: '123', city: 'New York', zip: '10041', country: 'USA' } },
        basket: {},
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};
