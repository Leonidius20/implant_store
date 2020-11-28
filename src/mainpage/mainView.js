function getTemplatedHtml() {
    return `<div>This is the main page</div>`;
}

export default function render() {
    document.getElementById('container').innerHTML = getTemplatedHtml();
}