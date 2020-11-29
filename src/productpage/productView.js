import template from './productPageTemplate.html'
import {inputSpinner} from 'bootstrap-input-spinner'
import './productPageStyle.css'
import populateTemplate from "../templater"
import {addToCart} from "./productController";

export default function render(params) {
    document.getElementById('container').innerHTML =
        populateTemplate(template, params);
    globalThis.onAddToCartClicked = onAddToCartClicked;
    $('#amount').inputSpinner({
        groupClass: "amount-selector",
        buttonsClass: "btn-primary",
    });
}

function onAddToCartClicked(productId) {
    const amount = parseInt($('#amount').val());
    addToCart(productId, amount);
}