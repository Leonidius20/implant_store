// main file
import './assets/bootstrap.min.css';
import MainController from "./mainpage/mainController";
import CatalogController from "./catalog/catalogController";
import {showLoader} from "./loader/loader";

export const API_URL = 'https://my-json-server.typicode.com/Leonidius20/implant_db/';

window.onload = navigate;
window.onhashchange = navigate;

function navigate() {
    const hash = window.location.hash.slice(1);

    const navbarItems = document.getElementsByClassName('nav-item');
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems.item(i).classList.remove('active');
    }

    switch (hash) {
        case '':
            showLoader();
            new MainController().showPage();
            document.getElementById('nav-item-home').classList.add('active');
            break;
        case 'catalog':
            new CatalogController().showPage();
            document.getElementById('nav-item-catalog').classList.add('active');
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