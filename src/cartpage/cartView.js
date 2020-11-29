import populateTemplate from "../templater";
import cartItemTemplate from './templates/cartItemTemplate.html';
import cartPageTemplate from './templates/cartPageTemplate.html';
import {removeFromCart} from "./cartModel";

export default function render({total, products}) {
    let cartItems = '';
    for (const product of products) {
        cartItems += populateTemplate(cartItemTemplate, product);
    }

    document.getElementById('container').innerHTML
        = populateTemplate(cartPageTemplate, { total, cartItems });

    globalThis.onRemoveItemFromCartClicked = onRemoveItemFromCartClicked;
}

function onRemoveItemFromCartClicked(productId) {
    removeFromCart(productId);
}