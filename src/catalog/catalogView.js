import catalogTemplate from './templates/catalogTemplate.html'
import categoryTemplate from './templates/categoryTemplate.html'
import cardTemplate from './templates/productCardTemplate.html'
import './templates/categoryStyles.css'
import populateTemplate from "../templater"

export default function render(params) {
    let categories = '';

    for (const categoryName in params) {
        let products = '';
        for (const product of params[categoryName]) {
            products += populateTemplate(cardTemplate, product);
        }
        categories += populateTemplate(categoryTemplate, {
            name: categoryName,
            products
        });
    }

    document.getElementById('container').innerHTML
        = populateTemplate(catalogTemplate, { categories });
}