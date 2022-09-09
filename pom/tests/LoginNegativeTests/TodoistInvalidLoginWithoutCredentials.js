import TodoistLoginPage from '../../pages/TodoistLoginPage';
import TodoistHomePage from '../../pages/TodoistHomePage';
import { URLS } from '../../data/Constants'

fixture`GettingStarted`
    .page`${URLS.LOGIN_URL}`

test
    ('TC02NegativeTestLoginWithoutCredentialsInTodoistPage', async t => {
        await t
            .click(TodoistHomePage.iniciarSesionButton)
            .click(TodoistLoginPage.startSesionButton)
            .expect(TodoistLoginPage.errorWithoutCredentialsOrPasswordTextarea.innerText).eql("Please enter a valid email address.")

    }); 