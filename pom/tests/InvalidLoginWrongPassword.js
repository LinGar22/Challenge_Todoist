import TodoistLoginPage from '../pages/TodoistLoginPage';
import TodoistHomePage from '../pages/TodoistHomePage';
import { URLS, CREDENTIALS } from '../data/Constants'

fixture`GettingStarted`
    .page`${URLS.LOGIN_URL}`

test
    ('TC04NegativeTestLoginWithInvalidPasswordTodoistPage', async t => {
        await t.click(TodoistHomePage.iniciarSesionButton)
        await TodoistLoginPage.submitLoginForm(CREDENTIALS.TODOIST_USER.EMAIL, CREDENTIALS.TODOIST_USER.WRONGPASS)
        await t.expect(TodoistLoginPage.errorWrongEmailOrPasswordTextarea.innerText).eql('Wrong email or password.')
    });