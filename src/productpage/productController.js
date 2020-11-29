import ErrorController from "../errorpage/errorController";
import {hideLoader} from "../loader/loader";
import render from "./productView";
import getProduct, {putToCart} from "./productModel";

export default function showPage(productId) {
    getProduct(productId).then(product => {
        render(product);
    }).catch(error => {
        new ErrorController().showPage(error);
    }).finally(hideLoader);
}

export function addToCart(productId, amount) {
    const cartSize = putToCart(productId, amount);
    document.getElementById('cart-number-of-items').innerText
        = cartSize.toString();

    const addedText = document.createElement('p');
    addedText.innerText = 'This item is in the cart.';
    addedText.classList.add('text-muted');

    document.getElementById('addToCartBlock').parentElement.replaceChild(
        addedText, document.getElementById('addToCartBlock'));
}
