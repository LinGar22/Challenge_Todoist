import TodoistAgendaPage from '../../pages/TodoistAgendaPage';
import { URLS } from '../../data/Constants'
import { STANDARD_USER } from '../../data/Roles'

fixture`GettingStarted`
    .page`${URLS.LOGIN_URL}`

/*test('TC01PositiveTestValidCredentialsInTodoistPage', async t => {
        await t.click(TodoistHomePage.iniciarSesionButton)
        await TodoistLoginPage.submitLoginForm(CREDENTIALS.TODOIST_USER.EMAIL, CREDENTIALS.TODOIST_USER.PASSWORD)
        await t.expect(TodoistAgendaPage.agendaViewListBox.visible).eql(true)
    });
*/
test('TC01PositiveTestValidCredentialsInTodoistPage', async t => {
    await t
        .useRole(STANDARD_USER)
        .expect(TodoistAgendaPage.agendaViewListBox.visible).eql(true)
});