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
}
