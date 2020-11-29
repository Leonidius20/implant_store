// main file
import './assets/bootstrap.min.css';
import './assets/footer.css';
import MainController from "./mainpage/mainController";
import CatalogController from "./catalog/catalogController";
import {showLoader} from "./loader/loader";
import PromoController from "./promopage/promoController";
import productController from "./productpage/productController";

export const API_URL = 'https://my-json-server.typicode.com/Leonidius20/implant_db/';

window.onload = () => {
    navigate();
    document.getElementById('cart-number-of-items').innerText
        = Object.keys(JSON.parse(window.localStorage.getItem('cart')) || {}).length.toString();
}
window.onhashchange = navigate;

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
            new CatalogController().showPage();
            document.getElementById('nav-item-catalog').classList.add('active');
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
        default:
            window.location.hash = '';
            break;

    }
}

function mainPage() {

}

function catalog() {

}

function category(id) {

}

function product(id) {

}

function promo(id) {

}

function cart() {

}

function makeOrder() {

}

function viewOrder(id) {

}