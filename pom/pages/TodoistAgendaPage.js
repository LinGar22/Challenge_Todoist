import { Selector, t } from 'testcafe';

class TodoistAgendaPage {
    constructor() {
        this.agendaViewListBox = Selector('#agenda_view');
        this.agendaInboxTab = Selector('li#filter_inbox');
        this.addTaskButton = Selector('button.plus_add_button');
        /*  this.taskNameTextArea = Selector('div.DraftEditor-editorContainer div div div div')*/
        this.taskNameTextArea = Selector('div.task_editor__content_field.no-focus-marker div.notranslate.public-DraftEditor-content');
        /*this.taskNameTextArea = Selector('div.task_editor__content_field.no-focus-marker div div div div div div div div');*/
        this.descriptionOfTaskTextArea = Selector('div.f9408a0e._6e9db9aa._6cad1a19 textarea');
        this.inboxNewTaskButton = Selector('button.icon_pill.projectSectionPill--container');
        this.inspirationInboxDropDownList = Selector('div.project_picker_item span.project_picker_item_name span').withText('Inspiration ');
        this.addNewTaskButton = Selector('[data-testid="task-editor-submit-button"]');
        this.addProjectButton = Selector('button.WdK4hrY._7a2031d6._8c546508._949f7858._1bdc5d38.f9408a0e');
        this.projectList = Selector('#projects_list');
        this.newItemInPersonalProjectButton = Selector('li div.markdown_content.task_content').withText('Inbox');
        this.newItemInTodayButton = Selector('li div.markdown_content.task_content').withText('Today!');
      /*  this.newItemInInboxWithPriority2Button = Selector('li div.markdown_content.task_content').withText('Task #'+(i));*/
        this.newItemInUpcomingButton = Selector('li div.markdown_content.task_content').withText('Upcoming');
        this.nameProjectInput = Selector('input#edit_project_modal_field_name');
        this.colorButton = Selector('button.color_dropdown_toggle.form_field_control');
        this.violetColorButton = Selector('span.color_dropdown_select__color[style="background-color: rgb(175, 56, 235);"]');
        this.addButton = Selector('button.ist_button.ist_button_red');
        this.deleteTaskIncludedInPersonalCheckbox = Selector('li div.markdown_content.task_content').withText('Inbox').parent('div.task_list_item__body').find('div.task_checkbox__circle');
        this.deleteTaskIncludedInInboxCheckbox = Selector('li div.markdown_content.task_content').withText('Priority').parent('div.task_list_item__body').find('div.task_checkbox__circle');
        this.deleteTaskIncludedInTodayWithRedLabelCheckbox = Selector('li div.markdown_content.task_content').withText('Today!').parent('div.task_list_item__body').find('div.task_checkbox__circle');
        this.deleteTaskIncludedInUpcomingCheckbox = Selector('li div.markdown_content.task_content').withText('Upcoming').parent('div.task_list_item__body').find('div.task_checkbox__circle');
        this.agendaTodayTab = Selector('li#filter_today');
        this.agendaUpcomingTab = Selector('li#filter_upcoming');
        this.selectPriorityButton = Selector('button.item_action.item_actions_priority');
        this.selectPriority2Dropdown = Selector('li.priority_picker_item').withText('Priority 2');
        this.selectRedLabelButton = Selector('button.item_action');
        this.selectReadFromRedLabelDropdown = Selector(' span.label_picker_option_name');
        this.nextWeekButton = Selector('div.upcoming_view__calendar__controls__nav button[aria-label="Next week"]');
        this.selectDateButton = Selector('button.calendar__day.upcoming_view__day_cell').withText('5');
    }

   async addInboxTasksWithPriority() {
    let n=10;
    let i=1;
    await t.click(this.addTaskButton)
    for(i=1;i<=n;i++) {
    await t           
    .click(this.taskNameTextArea)
    .typeText(this.taskNameTextArea, 'Task '+(i))
    .click(this.descriptionOfTaskTextArea)
    .typeText(this.descriptionOfTaskTextArea, 'Test case for Challenge')
    .click(this.selectPriorityButton)
    .click(this.selectPriority2Dropdown)
    .wait(5000)
    .expect(this.addNewTaskButton.visible).eql(true)
    .click(this.addNewTaskButton)
    .wait(5000)
    .click(this.agendaInboxTab);
    /*.expect(this.newItemInInboxWithPriority2Button.textContent).eql('Task '+(i));*/
}
   }
}


export default new TodoistAgendaPage();