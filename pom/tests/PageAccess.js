import { URLS } from '../data/Constants';
import TodoistAgendaPage from '../pages/TodoistAgendaPage';
import { STANDARD_USER } from '../data/Roles'

fixture`GettingStarted`
    .page`${URLS.LOGIN_URL}`

test
    ('TC02TasksInboxAddAndRemoveTaskWithPriority2InTodoistPage', async t => {
        await t
            .useRole(STANDARD_USER)
            .expect(TodoistAgendaPage.agendaViewListBox.visible).eql(true)
            .click(TodoistAgendaPage.agendaInboxTab)
        await TodoistAgendaPage.addInboxTasksWithPriority()

    });

