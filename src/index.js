// main file
import './assets/bootstrap.min.css';
import MainController from "./mainpage/mainController";

window.onhashchange = () => {
    const hash = window.location.hash.slice(1);

    switch (hash) {
        case '':
            new MainController().showPage();
            break;
        case 'catalog':

            break;

    }
};

window.location.hash = '';
console.log('assh');

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