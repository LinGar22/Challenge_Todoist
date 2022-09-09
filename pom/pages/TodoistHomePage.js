import { Selector, t } from 'testcafe';

class TodoistHomePage {
    constructor() {
        this.iniciarSesionButton = Selector('nav._16GZpESfDXUbe6aWQqTaWB._1XN4d3ZTKe1FFH2oIRgExP li:nth-child(1) a._1vrBX-JExqmMRnkPWrYFN9').withText('Log in');
    }
}
export default new TodoistHomePage();
