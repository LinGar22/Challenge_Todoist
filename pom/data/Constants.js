import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: 'https://todoist.com/'
}

export const CREDENTIALS = {
    TODOIST_USER: {
        EMAIL: process.env.TODOIST_USER_EMAIL,
        PASSWORD: process.env.TODOIST_USER_PASSWORD,
        WRONGPASS: process.env.TODOIST_USER_WRONGPASS
    }
}



