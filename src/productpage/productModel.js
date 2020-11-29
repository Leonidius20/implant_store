import {API_URL} from "../index";
import showToast from "../toast/toast";

export default async function getProduct(id) {
    return fetch(API_URL + 'products')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(products => {
            for (const product of products) {
                if (product['id'] === id) {
                    return product;
                }
            }
            throw new Error('no product with such ID');
        });
}

export function putToCart(productId, amount) {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {};
    if (cart[productId] == null) {
        cart[productId] = amount;
        window.localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        showToast('This item is already in cart. <a href=\"#cart\">Go to cart</a> if you want to change its quantity');
    }

    return Object.keys(cart).length;
}