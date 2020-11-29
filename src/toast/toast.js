import populateTemplate from "../templater";
import template from './toastTemplate.html';

export default function showToast(message) {
    const div = document.createElement('div');
    div.innerHTML = populateTemplate(template, { message });
    document.body.appendChild(div.firstChild);
}