import render from "./mainView";
import {getPromos} from "./mainModel";
import ErrorController from "../errorpage/errorController";
import {hideLoader} from "../loader/loader";

export default class MainController {

    showPage() {
        return getPromos().then(promos => {
            render({
                promos,
            });
        }).catch(error => {
            new ErrorController().showPage(error);
        }).finally(hideLoader);
    }

}