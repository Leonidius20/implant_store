// main file

import MainController from "./mainpage/mainController";

window.onhashchange = () => {
    const hash = window.location.hash.slice(1);
    if (hash === '') {
        new MainController().showPage();
    }
};

window.location.hash = '';

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