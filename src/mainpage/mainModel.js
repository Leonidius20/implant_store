import { API_URL } from "../index";

export async function getPromos() {
    return fetch(API_URL + 'promos')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });
}