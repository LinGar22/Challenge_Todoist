import TodoistLoginPage from '../pages/TodoistLoginPage';
import TodoistHomePage from '../pages/TodoistHomePage';
import { URLS, CREDENTIALS } from '../data/Constants'

fixture`GettingStarted`
    .page`${URLS.LOGIN_URL}`

test
    ('TC02NegativeTestLoginWithoutCredentialsInTodoistPage', async t => {
        await t
            .click(TodoistHomePage.iniciarSesionButton)
            .typeText(TodoistLoginPage.signUserInput, CREDENTIALS.TODOIST_USER.EMAIL)
            .click(TodoistLoginPage.startSesionButton)
            .expect(TodoistLoginPage.errorWithoutPasswordTextarea.innerText).eql('Passwords must be at least 8 characters long.')

    });