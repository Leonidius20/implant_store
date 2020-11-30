// main file
import './assets/bootstrap.min.css';
import './assets/footer.css';
import MainController from "./mainpage/mainController";
import CatalogController from "./catalog/catalogController";
import {showLoader} from "./loader/loader";
import PromoController from "./promopage/promoController";
import productController from "./productpage/productController";
import categoryController from "./categorypage/categoryController";
import cartController from "./cartpage/cartController";
import makeOrderController from "./makeorder/makeOrderController";

export const API_URL = 'https://my-json-server.typicode.com/Leonidius20/implant_db/';

let ignoreHashChange = false;

window.onload = () => {
    navigate();
    document.getElementById('cart-number-of-items').innerText
        = Object.keys(JSON.parse(window.localStorage.getItem('cart')) || {}).length.toString();
}
window.onhashchange = () => {
    if (!ignoreHashChange) navigate();
};

function navigate() {
    const hash = window.location.hash.slice(1);

    const navbarItems = document.getElementsByClassName('nav-item');
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems.item(i).classList.remove('active');
    }

    const pathAndId = hash.split('/');
    const path = pathAndId[0];

    switch (path) {
        case '':
            showLoader();
            new MainController().showPage();
            document.getElementById('nav-item-home').classList.add('active');
            break;
        case 'catalog':
            showLoader();
            if (pathAndId[1] == null) {
                new CatalogController().showPage();
                document.getElementById('nav-item-catalog').classList.add('active');
            } else {
                categoryController(parseInt(pathAndId[1]));
            }
            break;
        case 'promo':
            showLoader();
            if (pathAndId[1] == null) { // no id specified
                window.location.hash = '';
            } else {
                new PromoController().showPage(pathAndId[1]);
            }
            break;
        case 'product':
            showLoader();
            if (pathAndId[1] == null) { // no id specified
                window.location.hash = '';
            } else {
                productController(parseInt(pathAndId[1]));
            }
            break;
        case 'cart':
            showLoader();
            cartController();
            break;
        case 'order':
            if (pathAndId[1] == null) {
                showLoader();
                makeOrderController();
            } else window.location.hash = 'catalog';
            break;
        default:
            window.location.hash = '';
            break;

    }
}

export function setIgnoreHashChange(value) {
    ignoreHashChange = value;
}