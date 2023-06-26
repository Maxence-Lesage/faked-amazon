import { useState, useEffect } from 'react'

const createStore = (initialStore) => {
    let store = initialStore
    const listeners = new Set()

    const useStore = (param) => {
        const [, listener] = useState()

        useEffect(() => {
            listeners.add(listener)
            return () => listeners.delete(listener)
        }, [])

        const value = param ? getStore(param) : getStore()
        return value
    }

    const dispatch = (type, payload) => {
        switch (type) {
            case 'SET_CATEGORIES':
                store = { ...store, categories: payload }
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
            case 'categories':
                value = store.categories
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

export const [useStore, dispatch, getStore] = createStore({ categories: {}, token: "", profile: {}, basket: {} })