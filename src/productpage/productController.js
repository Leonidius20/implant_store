import ErrorController from "../errorpage/errorController";
import {hideLoader} from "../loader/loader";
import render from "./productView";
import getProduct from "./productModel";

export default class ProductController {

    showPage(productId) {
        return getProduct(productId).then(product => {
            render(product);
        }).catch(error => {
            new ErrorController().showPage(error);
        }).finally(hideLoader);
    }

}