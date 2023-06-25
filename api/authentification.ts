import { useStore, dispatch, getStore } from "../store/store";

interface params {
    email: string;
    password: string;
    name: string;
    number: number;
    password_repeat: string;
    refresh_token: string;
}

/*----------*/

export async function apiLogin(email: params['email'], password: params['password']) {
    fetch('https://api.storerestapi.com/auth/login',
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
            if (response.ok) {
                return response.json()
            } else {
                throw new Error()
            }
        })
        .then(json => {
            dispatch("SET_TOKEN", json.data.access_token);
            localStorage.setItem('refresh_token', json.data.refresh_token)
            return true
        })
        .catch(() => false)
}

/*----------*/

export async function apiRegistration(
    name: params['name'], email: params['email'], number: params['number'], password: params['password'], password_repeat: params['password_repeat']) {
    fetch('https://api.storerestapi.com/auth/register',
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
            if (response.ok) {
                return response.json()
            } else {
                throw new Error()
            }
        })
        .then(json => {
            dispatch("SET_TOKEN", json.data.access_token)
            localStorage.setItem('refresh_token', json.data.refresh_token)
            return true
        })
        .catch(() => false)
}

/*----------*/

export async function apiRefreshToken(refresh_token: params['refresh_token']) {
    fetch('https://api.storerestapi.com/auth/refresh',
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
            if (response.ok) {
                return response.json()
            } else {
                throw new Error()
            }
        })
        .then(json => {
            dispatch("SET_TOKEN", json.data.access_token);
            localStorage.setItem('refresh_token', json.data.refresh_token)
            return true
        })
        .catch(() => false)
}