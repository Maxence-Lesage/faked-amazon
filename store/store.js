import { useState, useEffect } from 'react'

const createStore = (initialStore) => {
    let store = initialStore
    const listeners = new Set()

    const useStore = () => {
        const [, listener] = useState()

        useEffect(() => {
            listeners.add(listener)
            return () => listeners.delete(listener)
        }, [])

        return store
    }

    const dispatch = (type, payload) => {
        switch (type) {
            case 'SET_ARTICLES':
                store = { ...store, articles: payload }
                break;
            case 'SET_TOKEN':
                store = { ...store, token: payload }
                break;
            case 'SET_PROFILE':
                store = { ...store, profile: payload }
                break;
            case 'SET_BASKET':
                store = { ...store, basket: payload }
                break;
            default:
                break;
        }
    }

    const getStore = (param) => {
        let value;
        switch (param) {
            case 'articles':
                value = store.articles
                break;
            case 'token':
                value = store.token
                break;
            case 'profile':
                value = store.profile
                break;
            case 'basket':
                value = store.basket
                break;
            default:
                value = store
                break;
        }
        return value
    }

    return [useStore, dispatch, getStore]
}

// Articles, Token, Profile, Basket
export const [useStore, dispatch, getStore] = createStore({ articles: {}, token: "e", profile: {}, basket: {} })