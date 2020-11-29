export default function populateTemplate(templateString, params) {
    let template = templateString.slice(); // may not actually copy
    // https://bugs.chromium.org/p/v8/issues/detail?id=2869
    for (const replacement in params) {
        template = template.replace('${' + replacement + "}", params[replacement]);
    }
    return template;
}