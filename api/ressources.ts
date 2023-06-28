interface params {
    category: string;
    product: string;
    page: number;
}

/*----------*/

export async function apiGetAllCategories() {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/categories`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => json.data)
        .catch(() => false)
    return response
}

/*----------*/

export async function apiGetSingleCategory(category: params['category']) {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/categories/${category}`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => json.data)
        .catch(() => false)
    return response
}

/*----------*/

export async function apiGetAllProducts() {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/products`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => json.data)
        .catch(() => false)
    return response
}

/*----------*/

export async function apiGetSingleProduct(product: params['product']) {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/products/${product}`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => json.data)
        .catch(() => false)
    return response
}

/*----------*/

export async function apiPaginationResult(page: params['page']) {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/products?limit=10&page=${page}`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => json.data)
        .catch(() => false)
    return response
}

