import { Role } from 'testcafe'
import TodoistLoginPage from '../pages/TodoistLoginPage';
import TodoistHomePage from '../pages/TodoistHomePage';
import { URLS,CREDENTIALS } from './Constants'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await t.click(TodoistHomePage.iniciarSesionButton)
    await TodoistLoginPage.submitLoginForm(CREDENTIALS.TODOIST_USER.EMAIL, CREDENTIALS.TODOIST_USER.PASSWORD)
},{preserveUrl:true})