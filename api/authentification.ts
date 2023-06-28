interface params {
    email: string;
    password: string;
    name: string;
    number: number;
    password_repeat: string;
    refresh_token: string;
    user_id: string;
}

/*----------*/

export async function apiLogin(email: params['email'], password: params['password']) {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/auth/login`,
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => {
            localStorage.setItem('refresh_token', json.data.refresh_token)
            return json.data.access_token
        })
        .catch(() => false)
    return response
}

/*----------*/

export async function apiRegistration(
    name: params['name'], email: params['email'], number: params['number'], password: params['password'], password_repeat: params['password_repeat']) {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/auth/register`,
        {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                number: number,
                password: password,
                password_repeat: password_repeat
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => {
            localStorage.setItem('refresh_token', json.data.refresh_token)
            return json.data.access_token
        })
        .catch(() => false)
    return response
}

/*----------*/

export async function apiRefreshToken(refresh_token: params['refresh_token']) {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/auth/refresh`,
        {
            method: 'POST',
            body: JSON.stringify({
                refresh_token: refresh_token,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => {
            localStorage.setItem('refresh_token', json.data.refresh_token)
            return json.data.access_token
        })
        .catch(() => false)
    return response
}

/*----------*/

export async function apiGetSingleUser(user_id: params['user_id']) {
    const response = fetch(`${process.env.NEXT_PUBLIC_STORE_API_URL}/users/${user_id}`)
        .then(response => {
            if (response.ok) return response.json()
            else throw new Error()
        })
        .then(json => json)
        .catch(() => false)
    return response
}