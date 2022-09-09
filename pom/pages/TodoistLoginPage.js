import { Selector, t } from 'testcafe';

class TodoistLoginPage {
    constructor() {
        this.signUserInput = Selector('div._2e189908.fd20ef50.f9408a0e').withText('Email')
        this.passwordInput = Selector('div._2e189908.fd20ef50.f9408a0e').withText('Password');
        this.startSesionButton = Selector('button.nFxHGeI.S7Jh9YX');
        this.agendaView = Selector('#agenda_view');
        this.agendaView = Selector('#agenda_view');
        this.agendaView = Selector('#agenda_view');
        this.agendaView = Selector('#agenda_view');
        this.errorWithoutCredentialsOrPasswordTextarea = Selector('p#element-2');
        this.errorWithoutPasswordTextarea = Selector('p#element-5');
        this.errorWrongEmailOrPasswordTextarea = Selector("div.a83bd4e0._266d6623._8f5b5f2b.f9408a0e");
    }

    async submitLoginForm(username, password) {
        await t
        .typeText(this.signUserInput, username)
        .typeText(this.passwordInput, password)
        .click(this.startSesionButton)
    }

}

export default new TodoistLoginPage