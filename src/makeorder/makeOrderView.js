import pageTemplate from './templates/makeOrderTemplate.html';
import itemTemplate from './templates/orderItemTemplate.html';
import populateTemplate from "../templater";

export default function render({ total, products }) {
    let cartItems = '';
    for (const product of products) {
        cartItems += populateTemplate(itemTemplate, product);
    }

    document.getElementById('container').innerHTML
        = populateTemplate(pageTemplate, { total, cartItems });

    globalThis.onOrderFormSubmit = onOrderFormSubmit;
}

function onOrderFormSubmit(event) {
    const form = document.getElementById('form');
    if (checkForm(form) === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
}

function checkForm(form) {
    const phoneInput = document.getElementById('inputPhone4');
    if (!/^\+[0-9]{12}$/.test(phoneInput.value)) {
        phoneInput.setCustomValidity('invalid');
    } else phoneInput.setCustomValidity('');
    return form.checkValidity();
}
