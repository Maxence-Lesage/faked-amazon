import { useStore, dispatch, getStore } from "../store/store";

interface params {
    category: string;
    product: string;
    page: number;
}

/*----------*/

export async function apiGetAllCategories() {
    fetch('https://api.storerestapi.com/categories')
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => {
            dispatch('SET_CATEGORIES', json.data)
            return true
        })
        .catch(() => false)
}

/*----------*/

export async function apiGetSingleCategory(category: params['category']) {
    fetch(`https://api.storerestapi.com/categories/${category}`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => console.log(json))
        .catch(() => false)
}

/*----------*/

export async function apiGetAllProducts() {
    fetch('https://api.storerestapi.com/products')
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => console.log(json))
        .catch(() => false)
}

/*----------*/

export async function apiGetSingleProduct(product: params['product']) {
    fetch(`https://api.storerestapi.com/products/${product}`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => console.log(json))
        .catch(() => false)
}

/*----------*/

export async function apiPaginationResult(page: params['page']) {
    fetch(`https://api.storerestapi.com/products?limit=10&page=${page}`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => console.log(json))
        .catch(() => false)
}

