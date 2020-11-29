import mainTemplate from './templates/mainTemplate.html'
import carouselItemTemplate from './templates/carouselItemTemplate.html'
import './styles/mainStyle.css'
import populateTemplate from "../templater";

export default function render(params) {
    console.log(params);
    let carouselItems = '';
    for (const promo of params['promos']) {
        const item = populateTemplate(carouselItemTemplate, promo);
        console.log(promo);
        carouselItems += item;
    }

    const html = populateTemplate(mainTemplate, {
        carousel_items: carouselItems,
    });

    document.getElementById('container').innerHTML = html;

    document.getElementsByClassName('carousel-inner')[0].children[0].classList.add('active');

    $('.carousel').carousel();
}