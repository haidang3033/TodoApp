import notification  from "./notification.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    disableButton(btnClass) {
        const buttonElement = $(`${btnClass}`)
        buttonElement.classList.add('disabled')
        buttonElement.disabled = true
    },
    enableButton(btnClass) {
        const buttonElement = $(`${btnClass}`)
        buttonElement.classList.remove('disabled')
        buttonElement.disabled = false
    },
    getStorage(name) {
        if (name == 'calendar') {
            const currentYear = new Date().getFullYear()
            const currentMonth = new Date().getMonth()
            let maxDay = 30
    
            switch (currentMonth) {
                case 0:
                    maxDay = 31
                    break;
                case 1:
                    maxDay = Math.floor(currentYear / 4) == (currentYear / 4) ? 29 : 28
                    break;
                case 2:
                    maxDay = 31
                    break;
                case 3:
                    maxDay = 30
                    break;
                case 4:
                    maxDay = 31
                    break;
                case 5:
                    maxDay = 30
                    break;
                case 6:
                    maxDay = 31
                    break;
                case 7:
                    maxDay = 31
                    break;
                case 8:
                    maxDay = 30
                    break;
                case 9:
                    maxDay = 31
                    break;
                case 10:
                    maxDay = 30
                    break;
                case 11:
                    maxDay = 31
                    break;
            }
    
            switch (maxDay) {
                case 31:
                    if (localStorage.getItem(name) === null) {
                        localStorage.setItem(name, JSON.stringify([
                            {
                                date: 1,
                                day: 0,
                                task: []
                            },
                            {
                                date: 2,
                                day: 0,
                                task: []
                            },
                            {
                                date: 3,
                                day: 0,
                                task: []
                            },
                            {
                                date: 4,
                                day: 0,
                                task: []
                            },
                            {
                                date: 5,
                                day: 0,
                                task: []
                            },
                            {
                                date: 6,
                                day: 0,
                                task: []
                            },
                            {
                                date: 7,
                                day: 0,
                                task: []
                            },
                            {
                                date: 8,
                                day: 0,
                                task: []
                            },
                            {
                                date: 9,
                                day: 0,
                                task: []
                            },
                            {
                                date: 10,
                                day: 0,
                                task: []
                            },
                            {
                                date: 11,
                                day: 0,
                                task: []
                            },
                            {
                                date: 12,
                                day: 0,
                                task: []
                            },
                            {
                                date: 13,
                                day: 0,
                                task: []
                            },
                            {
                                date: 14,
                                day: 0,
                                task: []
                            },
                            {
                                date: 15,
                                day: 0,
                                task: []
                            },
                            {
                                date: 16,
                                day: 0,
                                task: []
                            },
                            {
                                date: 17,
                                day: 0,
                                task: []
                            },
                            {
                                date: 18,
                                day: 0,
                                task: []
                            },
                            {
                                date: 19,
                                day: 0,
                                task: []
                            },
                            {
                                date: 20,
                                day: 0,
                                task: []
                            },
                            {
                                date: 21,
                                day: 0,
                                task: []
                            },
                            {
                                date: 22,
                                day: 0,
                                task: []
                            },
                            {
                                date: 23,
                                day: 0,
                                task: []
                            },
                            {
                                date: 24,
                                day: 0,
                                task: []
                            },
                            {
                                date: 25,
                                day: 0,
                                task: []
                            },
                            {
                                date: 26,
                                day: 0,
                                task: []
                            },
                            {
                                date: 27,
                                day: 0,
                                task: []
                            },
                            {
                                date: 28,
                                day: 0,
                                task: []
                            },
                            {
                                date: 29,
                                day: 0,
                                task: []
                            },
                            {
                                date: 30,
                                day: 0,
                                task: []
                            },
                            {
                                date: 31,
                                day: 0,
                                task: []
                            },
                        ]))
                    }
                    return JSON.parse(localStorage.getItem(name))
                    break;
                case 30:
                    if (localStorage.getItem(name) === null) {
                        localStorage.setItem(name, JSON.stringify([
                            {
                                date: 1,
                                day: 0,
                                task: []
                            },
                            {
                                date: 2,
                                day: 0,
                                task: []
                            },
                            {
                                date: 3,
                                day: 0,
                                task: []
                            },
                            {
                                date: 4,
                                day: 0,
                                task: []
                            },
                            {
                                date: 5,
                                day: 0,
                                task: []
                            },
                            {
                                date: 6,
                                day: 0,
                                task: []
                            },
                            {
                                date: 7,
                                day: 0,
                                task: []
                            },
                            {
                                date: 8,
                                day: 0,
                                task: []
                            },
                            {
                                date: 9,
                                day: 0,
                                task: []
                            },
                            {
                                date: 10,
                                day: 0,
                                task: []
                            },
                            {
                                date: 11,
                                day: 0,
                                task: []
                            },
                            {
                                date: 12,
                                day: 0,
                                task: []
                            },
                            {
                                date: 13,
                                day: 0,
                                task: []
                            },
                            {
                                date: 14,
                                day: 0,
                                task: []
                            },
                            {
                                date: 15,
                                day: 0,
                                task: []
                            },
                            {
                                date: 16,
                                day: 0,
                                task: []
                            },
                            {
                                date: 17,
                                day: 0,
                                task: []
                            },
                            {
                                date: 18,
                                day: 0,
                                task: []
                            },
                            {
                                date: 19,
                                day: 0,
                                task: []
                            },
                            {
                                date: 20,
                                day: 0,
                                task: []
                            },
                            {
                                date: 21,
                                day: 0,
                                task: []
                            },
                            {
                                date: 22,
                                day: 0,
                                task: []
                            },
                            {
                                date: 23,
                                day: 0,
                                task: []
                            },
                            {
                                date: 24,
                                day: 0,
                                task: []
                            },
                            {
                                date: 25,
                                day: 0,
                                task: []
                            },
                            {
                                date: 26,
                                day: 0,
                                task: []
                            },
                            {
                                date: 27,
                                day: 0,
                                task: []
                            },
                            {
                                date: 28,
                                day: 0,
                                task: []
                            },
                            {
                                date: 29,
                                day: 0,
                                task: []
                            },
                            {
                                date: 30,
                                day: 0,
                                task: []
                            },
                        ]))
                    }
                    return JSON.parse(localStorage.getItem(name))
                    break;
                case 29:
                    if (localStorage.getItem(name) === null) {
                        localStorage.setItem(name, JSON.stringify([
                            {
                                date: 1,
                                day: 0,
                                task: []
                            },
                            {
                                date: 2,
                                day: 0,
                                task: []
                            },
                            {
                                date: 3,
                                day: 0,
                                task: []
                            },
                            {
                                date: 4,
                                day: 0,
                                task: []
                            },
                            {
                                date: 5,
                                day: 0,
                                task: []
                            },
                            {
                                date: 6,
                                day: 0,
                                task: []
                            },
                            {
                                date: 7,
                                day: 0,
                                task: []
                            },
                            {
                                date: 8,
                                day: 0,
                                task: []
                            },
                            {
                                date: 9,
                                day: 0,
                                task: []
                            },
                            {
                                date: 10,
                                day: 0,
                                task: []
                            },
                            {
                                date: 11,
                                day: 0,
                                task: []
                            },
                            {
                                date: 12,
                                day: 0,
                                task: []
                            },
                            {
                                date: 13,
                                day: 0,
                                task: []
                            },
                            {
                                date: 14,
                                day: 0,
                                task: []
                            },
                            {
                                date: 15,
                                day: 0,
                                task: []
                            },
                            {
                                date: 16,
                                day: 0,
                                task: []
                            },
                            {
                                date: 17,
                                day: 0,
                                task: []
                            },
                            {
                                date: 18,
                                day: 0,
                                task: []
                            },
                            {
                                date: 19,
                                day: 0,
                                task: []
                            },
                            {
                                date: 20,
                                day: 0,
                                task: []
                            },
                            {
                                date: 21,
                                day: 0,
                                task: []
                            },
                            {
                                date: 22,
                                day: 0,
                                task: []
                            },
                            {
                                date: 23,
                                day: 0,
                                task: []
                            },
                            {
                                date: 24,
                                day: 0,
                                task: []
                            },
                            {
                                date: 25,
                                day: 0,
                                task: []
                            },
                            {
                                date: 26,
                                day: 0,
                                task: []
                            },
                            {
                                date: 27,
                                day: 0,
                                task: []
                            },
                            {
                                date: 28,
                                day: 0,
                                task: []
                            },
                            {
                                date: 29,
                                day: 0,
                                task: []
                            },
                        ]))
                    }
                    return JSON.parse(localStorage.getItem(name))
                    break;
                case 28:
                    if (localStorage.getItem(name) === null) {
                        localStorage.setItem(name, JSON.stringify([
                            {
                                date: 1,
                                day: 0,
                                task: []
                            },
                            {
                                date: 2,
                                day: 0,
                                task: []
                            },
                            {
                                date: 3,
                                day: 0,
                                task: []
                            },
                            {
                                date: 4,
                                day: 0,
                                task: []
                            },
                            {
                                date: 5,
                                day: 0,
                                task: []
                            },
                            {
                                date: 6,
                                day: 0,
                                task: []
                            },
                            {
                                date: 7,
                                day: 0,
                                task: []
                            },
                            {
                                date: 8,
                                day: 0,
                                task: []
                            },
                            {
                                date: 9,
                                day: 0,
                                task: []
                            },
                            {
                                date: 10,
                                day: 0,
                                task: []
                            },
                            {
                                date: 11,
                                day: 0,
                                task: []
                            },
                            {
                                date: 12,
                                day: 0,
                                task: []
                            },
                            {
                                date: 13,
                                day: 0,
                                task: []
                            },
                            {
                                date: 14,
                                day: 0,
                                task: []
                            },
                            {
                                date: 15,
                                day: 0,
                                task: []
                            },
                            {
                                date: 16,
                                day: 0,
                                task: []
                            },
                            {
                                date: 17,
                                day: 0,
                                task: []
                            },
                            {
                                date: 18,
                                day: 0,
                                task: []
                            },
                            {
                                date: 19,
                                day: 0,
                                task: []
                            },
                            {
                                date: 20,
                                day: 0,
                                task: []
                            },
                            {
                                date: 21,
                                day: 0,
                                task: []
                            },
                            {
                                date: 22,
                                day: 0,
                                task: []
                            },
                            {
                                date: 23,
                                day: 0,
                                task: []
                            },
                            {
                                date: 24,
                                day: 0,
                                task: []
                            },
                            {
                                date: 25,
                                day: 0,
                                task: []
                            },
                            {
                                date: 26,
                                day: 0,
                                task: []
                            },
                            {
                                date: 27,
                                day: 0,
                                task: []
                            },
                            {
                                date: 28,
                                day: 0,
                                task: []
                            },
                        ]))
                    }
                    return JSON.parse(localStorage.getItem(name))
                    break;
            }
        }
        else {
            if (localStorage.getItem(name) === null) {
                localStorage.setItem(name, JSON.stringify('Your note'))
            }
            return JSON.parse(localStorage.getItem(name))
        }
    },
    resetStorage(name) {
        if (name == 'calendar') {
            const currentYear = new Date().getFullYear()
            const currentMonth = new Date().getMonth()
            let maxDay = 30
    
            switch (currentMonth) {
                case 0:
                    maxDay = 31
                    break;
                case 1:
                    maxDay = Math.floor(currentYear / 4) == (currentYear / 4) ? 29 : 28
                    break;
                case 2:
                    maxDay = 31
                    break;
                case 3:
                    maxDay = 30
                    break;
                case 4:
                    maxDay = 31
                    break;
                case 5:
                    maxDay = 30
                    break;
                case 6:
                    maxDay = 31
                    break;
                case 7:
                    maxDay = 31
                    break;
                case 8:
                    maxDay = 30
                    break;
                case 9:
                    maxDay = 31
                    break;
                case 10:
                    maxDay = 30
                    break;
                case 11:
                    maxDay = 31
                    break;
            }
    
            switch (maxDay) {
                case 31:
                    localStorage.setItem(name, JSON.stringify([
                        {
                            date: 1,
                            day: 0,
                            task: []
                        },
                        {
                            date: 2,
                            day: 0,
                            task: []
                        },
                        {
                            date: 3,
                            day: 0,
                            task: []
                        },
                        {
                            date: 4,
                            day: 0,
                            task: []
                        },
                        {
                            date: 5,
                            day: 0,
                            task: []
                        },
                        {
                            date: 6,
                            day: 0,
                            task: []
                        },
                        {
                            date: 7,
                            day: 0,
                            task: []
                        },
                        {
                            date: 8,
                            day: 0,
                            task: []
                        },
                        {
                            date: 9,
                            day: 0,
                            task: []
                        },
                        {
                            date: 10,
                            day: 0,
                            task: []
                        },
                        {
                            date: 11,
                            day: 0,
                            task: []
                        },
                        {
                            date: 12,
                            day: 0,
                            task: []
                        },
                        {
                            date: 13,
                            day: 0,
                            task: []
                        },
                        {
                            date: 14,
                            day: 0,
                            task: []
                        },
                        {
                            date: 15,
                            day: 0,
                            task: []
                        },
                        {
                            date: 16,
                            day: 0,
                            task: []
                        },
                        {
                            date: 17,
                            day: 0,
                            task: []
                        },
                        {
                            date: 18,
                            day: 0,
                            task: []
                        },
                        {
                            date: 19,
                            day: 0,
                            task: []
                        },
                        {
                            date: 20,
                            day: 0,
                            task: []
                        },
                        {
                            date: 21,
                            day: 0,
                            task: []
                        },
                        {
                            date: 22,
                            day: 0,
                            task: []
                        },
                        {
                            date: 23,
                            day: 0,
                            task: []
                        },
                        {
                            date: 24,
                            day: 0,
                            task: []
                        },
                        {
                            date: 25,
                            day: 0,
                            task: []
                        },
                        {
                            date: 26,
                            day: 0,
                            task: []
                        },
                        {
                            date: 27,
                            day: 0,
                            task: []
                        },
                        {
                            date: 28,
                            day: 0,
                            task: []
                        },
                        {
                            date: 29,
                            day: 0,
                            task: []
                        },
                        {
                            date: 30,
                            day: 0,
                            task: []
                        },
                        {
                            date: 31,
                            day: 0,
                            task: []
                        },
                    ]))
                    return JSON.parse(localStorage.getItem(name))
                    break;
                case 30:
                    localStorage.setItem(name, JSON.stringify([
                        {
                            date: 1,
                            day: 0,
                            task: []
                        },
                        {
                            date: 2,
                            day: 0,
                            task: []
                        },
                        {
                            date: 3,
                            day: 0,
                            task: []
                        },
                        {
                            date: 4,
                            day: 0,
                            task: []
                        },
                        {
                            date: 5,
                            day: 0,
                            task: []
                        },
                        {
                            date: 6,
                            day: 0,
                            task: []
                        },
                        {
                            date: 7,
                            day: 0,
                            task: []
                        },
                        {
                            date: 8,
                            day: 0,
                            task: []
                        },
                        {
                            date: 9,
                            day: 0,
                            task: []
                        },
                        {
                            date: 10,
                            day: 0,
                            task: []
                        },
                        {
                            date: 11,
                            day: 0,
                            task: []
                        },
                        {
                            date: 12,
                            day: 0,
                            task: []
                        },
                        {
                            date: 13,
                            day: 0,
                            task: []
                        },
                        {
                            date: 14,
                            day: 0,
                            task: []
                        },
                        {
                            date: 15,
                            day: 0,
                            task: []
                        },
                        {
                            date: 16,
                            day: 0,
                            task: []
                        },
                        {
                            date: 17,
                            day: 0,
                            task: []
                        },
                        {
                            date: 18,
                            day: 0,
                            task: []
                        },
                        {
                            date: 19,
                            day: 0,
                            task: []
                        },
                        {
                            date: 20,
                            day: 0,
                            task: []
                        },
                        {
                            date: 21,
                            day: 0,
                            task: []
                        },
                        {
                            date: 22,
                            day: 0,
                            task: []
                        },
                        {
                            date: 23,
                            day: 0,
                            task: []
                        },
                        {
                            date: 24,
                            day: 0,
                            task: []
                        },
                        {
                            date: 25,
                            day: 0,
                            task: []
                        },
                        {
                            date: 26,
                            day: 0,
                            task: []
                        },
                        {
                            date: 27,
                            day: 0,
                            task: []
                        },
                        {
                            date: 28,
                            day: 0,
                            task: []
                        },
                        {
                            date: 29,
                            day: 0,
                            task: []
                        },
                        {
                            date: 30,
                            day: 0,
                            task: []
                        },
                    ]))
                    return JSON.parse(localStorage.getItem(name))
                    break;
                case 29:
                    localStorage.setItem(name, JSON.stringify([
                        {
                            date: 1,
                            day: 0,
                            task: []
                        },
                        {
                            date: 2,
                            day: 0,
                            task: []
                        },
                        {
                            date: 3,
                            day: 0,
                            task: []
                        },
                        {
                            date: 4,
                            day: 0,
                            task: []
                        },
                        {
                            date: 5,
                            day: 0,
                            task: []
                        },
                        {
                            date: 6,
                            day: 0,
                            task: []
                        },
                        {
                            date: 7,
                            day: 0,
                            task: []
                        },
                        {
                            date: 8,
                            day: 0,
                            task: []
                        },
                        {
                            date: 9,
                            day: 0,
                            task: []
                        },
                        {
                            date: 10,
                            day: 0,
                            task: []
                        },
                        {
                            date: 11,
                            day: 0,
                            task: []
                        },
                        {
                            date: 12,
                            day: 0,
                            task: []
                        },
                        {
                            date: 13,
                            day: 0,
                            task: []
                        },
                        {
                            date: 14,
                            day: 0,
                            task: []
                        },
                        {
                            date: 15,
                            day: 0,
                            task: []
                        },
                        {
                            date: 16,
                            day: 0,
                            task: []
                        },
                        {
                            date: 17,
                            day: 0,
                            task: []
                        },
                        {
                            date: 18,
                            day: 0,
                            task: []
                        },
                        {
                            date: 19,
                            day: 0,
                            task: []
                        },
                        {
                            date: 20,
                            day: 0,
                            task: []
                        },
                        {
                            date: 21,
                            day: 0,
                            task: []
                        },
                        {
                            date: 22,
                            day: 0,
                            task: []
                        },
                        {
                            date: 23,
                            day: 0,
                            task: []
                        },
                        {
                            date: 24,
                            day: 0,
                            task: []
                        },
                        {
                            date: 25,
                            day: 0,
                            task: []
                        },
                        {
                            date: 26,
                            day: 0,
                            task: []
                        },
                        {
                            date: 27,
                            day: 0,
                            task: []
                        },
                        {
                            date: 28,
                            day: 0,
                            task: []
                        },
                        {
                            date: 29,
                            day: 0,
                            task: []
                        },
                    ]))
                    return JSON.parse(localStorage.getItem(name))
                    break;
                case 28:
                    localStorage.setItem(name, JSON.stringify([
                        {
                            date: 1,
                            day: 0,
                            task: []
                        },
                        {
                            date: 2,
                            day: 0,
                            task: []
                        },
                        {
                            date: 3,
                            day: 0,
                            task: []
                        },
                        {
                            date: 4,
                            day: 0,
                            task: []
                        },
                        {
                            date: 5,
                            day: 0,
                            task: []
                        },
                        {
                            date: 6,
                            day: 0,
                            task: []
                        },
                        {
                            date: 7,
                            day: 0,
                            task: []
                        },
                        {
                            date: 8,
                            day: 0,
                            task: []
                        },
                        {
                            date: 9,
                            day: 0,
                            task: []
                        },
                        {
                            date: 10,
                            day: 0,
                            task: []
                        },
                        {
                            date: 11,
                            day: 0,
                            task: []
                        },
                        {
                            date: 12,
                            day: 0,
                            task: []
                        },
                        {
                            date: 13,
                            day: 0,
                            task: []
                        },
                        {
                            date: 14,
                            day: 0,
                            task: []
                        },
                        {
                            date: 15,
                            day: 0,
                            task: []
                        },
                        {
                            date: 16,
                            day: 0,
                            task: []
                        },
                        {
                            date: 17,
                            day: 0,
                            task: []
                        },
                        {
                            date: 18,
                            day: 0,
                            task: []
                        },
                        {
                            date: 19,
                            day: 0,
                            task: []
                        },
                        {
                            date: 20,
                            day: 0,
                            task: []
                        },
                        {
                            date: 21,
                            day: 0,
                            task: []
                        },
                        {
                            date: 22,
                            day: 0,
                            task: []
                        },
                        {
                            date: 23,
                            day: 0,
                            task: []
                        },
                        {
                            date: 24,
                            day: 0,
                            task: []
                        },
                        {
                            date: 25,
                            day: 0,
                            task: []
                        },
                        {
                            date: 26,
                            day: 0,
                            task: []
                        },
                        {
                            date: 27,
                            day: 0,
                            task: []
                        },
                        {
                            date: 28,
                            day: 0,
                            task: []
                        },
                    ]))
                    return JSON.parse(localStorage.getItem(name))
                    break;
            }
        }
    },
    initMonth(name) {
        if (localStorage.getItem(name) === null) {
            localStorage.setItem(name, JSON.stringify({monthIndex: new Date().getMonth()}))
        }
        return JSON.parse(localStorage.getItem(name))
    },
    checkDate() {
        const currentDate = new Date()
        const currentMonth = currentDate.getMonth()
        const month = this.initMonth('month')
        if (currentMonth != month.monthIndex) {
            this.resetStorage('calendar')

            month.monthIndex = currentMonth
            localStorage.setItem('month', JSON.stringify(month)) 
        }
    },
    handleSchedule() {
        const schedule = $('.schedule')
        const removeAllBtn = $('.title .buttons .clear')
        const noteBtn = $('.title .buttons .note')

        // Choose a day
        schedule.onclick = (e) => {
            const dayBox = e.target.closest('.row.content .column:not(.empty)')
            if (dayBox) {
                this.renderTask(Number(dayBox.querySelector('h3').innerText) - 1)
                this.handleEditModal(Number(dayBox.querySelector('h3').innerText) - 1)
            }
        }

        // Note events
        noteBtn.onclick = () => {
            this.handleNote()
        }

        // Remove all events
        removeAllBtn.onclick = () => {
            this.handleRemoveModal()  
        }
    },
    handleNote() {
        let storageNote = this.getStorage('note')
        const schedule = $('.schedule')
        const modalBox = $('.modal-box')
        const noteBtn = $('.title .buttons .note')
        
        noteBtn.classList.toggle('turn-around')

        // Open note
        if (modalBox.innerHTML == '') {
            modalBox.innerHTML = 
                `<div class="note-modal">
                    <div class="heading">
                        <p>Edit your note here</p>
                        <button class="btn btn-remove-2 disabled" disabled>Save</button>
                    </div>
                    <div class="content">
                        <h3>${storageNote == '' ? 'Your note' : storageNote}</h3>
                        <textarea placeholder="Your note" cols="100" rows="10"></textarea>
                    </div>
                </div>`
            schedule.classList.add('show-bot-modal')
        }
        else {
            modalBox.innerHTML = ''
            schedule.classList.remove('show-bot-modal')
        }

        // Edit note
        const editBtn = $('.note-modal .content')
        const textNote = $('.note-modal .content h3')
        const textArea = $('.note-modal .content textarea')
        const saveBtn = $('.note-modal .heading button')
        const saveInfo = () => {
            editBtn.classList.remove('editting')

            storageNote = textArea.value == '' ? 'Your note' : textArea.value
            textNote.innerText = textArea.value == '' ? 'Your note' : textArea.value

            localStorage.setItem('note', JSON.stringify(storageNote))

            this.disableButton('.note-modal .heading button')
        }

        editBtn.onclick = () => {
            textArea.value = textNote.innerText

            editBtn.classList.add('editting')
            textArea.focus()

            this.enableButton('.note-modal .heading button')
        }

        // Save info
        textArea.onkeypress = (e) => {
            const key = e.key || e.code
            if (key == 'Enter') {
                saveInfo()
            }
        }
        saveBtn.onclick = () => {
            saveInfo()
        }
    },
    handleRemoveModal() {
        const modalBox = $('.modal-box')
        const schedule = $('.schedule')
        const noteBtn = $('.title .buttons .note')
        
        noteBtn.classList.remove('turn-around')
        schedule.classList.remove('show-bot-modal')

        // Show modal
        modalBox.innerHTML = 
                `<div class="modal remove-all-modal">
                    <div class="container">
                        <div class="heading">
                            <div class="text">
                                <img src="/img/pic-logo.png" alt="">
                                <div>
                                    <h3>Are you sure to remove all events ?</h3>
                                    <span>They will be permanently removed</span>
                                </div>
                            </div>
                        </div>
                        <div class="task-image">
                            <img src="/img/img1.png" alt="">
                        </div>
                        <div class="buttons">
                            <button class="cancel btn btn-remove">Cancel</button>
                            <button class="confirm btn btn-done">Confirm</button>
                        </div>
                    </div>
                </div>`

        const modalLayer = $('.remove-all-modal')
        const modalContainer = $('.remove-all-modal .container')
        const cancelBtn = $('.remove-all-modal .cancel')
        const confirmBtn = $('.remove-all-modal .confirm')

        confirmBtn.onclick = () => {
            modalBox.innerHTML = ''
            this.resetStorage('calendar')
            this.renderDate()
        }

        // Hide modal
        cancelBtn.onclick = () => {
            modalBox.innerHTML = ''
        }
        modalLayer.onclick = () => {
            modalBox.innerHTML = ''
        }
        modalContainer.onclick = (e) => {
            e.stopPropagation()
        }
    },
    handleEditModal(dayIndex) {
        const schedule = $('.schedule')
        const modalBox = $('.modal-box')
        const dailyEvent = $('.daily-event')
        const dailyEventContainer = $('.daily-event .container')
        const closeBtn = $('.daily-event .close')
        const noteBtn = $('.title .buttons .note')
        
        noteBtn.classList.remove('turn-around')
        schedule.classList.remove('show-bot-modal')

        closeBtn.onclick = () => {
            modalBox.innerHTML = ''
        }
        dailyEvent.onclick = () => {
            modalBox.innerHTML = ''
        }
        dailyEventContainer.onclick = (e) => {
            e.stopPropagation()
        }

        this.handleModalItem(dayIndex)
    },
    handleModalItem(dayIndex) {
        const calendarStorage = this.getStorage('calendar')
        const removeBtn = $('.daily-event .remove')
        const createBtn = $('.daily-event .create')
        const saveBtn = $('.daily-event .save')
        const itemContainer = $('.task-list')
        const nameInput = $('.daily-event .task-edit .name')
        const timeInput = $('.daily-event .task-edit .time')

        itemContainer.onclick = (e) => {
            const selectedItem = e.target.closest('.item')

            // Choose an item 
            if (selectedItem) {
                const items = $$('.task-list .item')
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains('active')) {
                        items[i].classList.remove('active')
                    }
                }
                selectedItem.classList.add('active')

                // Set name & time to input
                nameInput.value = calendarStorage[dayIndex].task[selectedItem.dataset.index].name
                timeInput.value = calendarStorage[dayIndex].task[selectedItem.dataset.index].time

                // Enable save button
                this.enableButton('.daily-event .save')

                // Enable inputs
                this.enableButton('.daily-event .task-edit .name')
                this.enableButton('.daily-event .task-edit .time')
                nameInput.focus()

                // Enable remove button
                this.enableButton('.daily-event .remove')

                // Save item info
                saveBtn.onclick = () => {
                    this.saveTask(dayIndex, selectedItem.dataset.index)
                }
                nameInput.onkeypress = (e) => {
                    const key = e.key || e.code
                    if (key == 'Enter') {
                        this.saveTask(dayIndex, selectedItem.dataset.index)
                    }
                }
                timeInput.onkeypress = (e) => {
                    const key = e.key || e.code
                    if (key == 'Enter') {
                        this.saveTask(dayIndex, selectedItem.dataset.index)
                    }
                }

                // Remove an item
                removeBtn.onclick = () => {
                    this.removeTask(dayIndex, selectedItem.dataset.index)
                }
            }
        }

        // Create a new item
        createBtn.onclick = () => {
            this.createTask(dayIndex)
        }
    },
    saveTask(dayIndex, taskIndex) {
        const calendarStorage = this.getStorage('calendar')
        const taskItems = $$('.daily-event .task-list .item')
        const nameInput = $('.daily-event .task-edit .name')
        const timeInput = $('.daily-event .task-edit .time')

        calendarStorage[dayIndex].task[taskIndex].name = nameInput.value == '' ? 'New Task' : nameInput.value
        calendarStorage[dayIndex].task[taskIndex].time = timeInput.value == '' ? 'New Task' : timeInput.value

        taskItems[taskIndex].querySelector('.name').innerText = nameInput.value == '' ? 'New Task' : nameInput.value
        taskItems[taskIndex].querySelector('.time').innerText = timeInput.value == '' ? 'New Task' : timeInput.value

        localStorage.setItem('calendar', JSON.stringify(calendarStorage))

        // Disable save button
        this.disableButton('.daily-event .save')

        // Disable selected item
        taskItems[taskIndex].classList.remove('active')

        // Clear and disable input
        nameInput.value = ''
        timeInput.value = ''

        this.disableButton('.daily-event .task-edit .name')
        this.disableButton('.daily-event .task-edit .time')

        // Disable remove button
        this.disableButton('.daily-event .remove')

        this.handleModalItem(dayIndex)
    },
    removeTask(dayIndex, taskIndex) {
        const calendarStorage = this.getStorage('calendar')
        const itemContainer = $('.task-list')
        const nameInput = $('.daily-event .task-edit .name')
        const timeInput = $('.daily-event .task-edit .time')

        // Reset storage
        calendarStorage[dayIndex].task.splice(taskIndex, 1)
        localStorage.setItem('calendar', JSON.stringify(calendarStorage))

        // Get data from reseted storage
        const newHtmlsTask = calendarStorage[dayIndex].task.map((task, index) =>
            `<div data-index="${index}" class="item">
                <div class="name">${task.name}</div>
                <div class="time">${task.time}</div>
            </div>`)

        // Rerender container
        if (newHtmlsTask.length == 0) {
            itemContainer.innerHTML = 
                `<div class="no-item">
                    <p>Click "Create" to add a new event !</p>
                    <img src="/img/pic-logo.png" alt="">
                </div>`
        }
        else {
            itemContainer.innerHTML = newHtmlsTask.join('')
        }

        // Disable and clear button & inputs
        this.disableButton('.daily-event .remove')
        this.disableButton('.daily-event .task-edit .name')
        this.disableButton('.daily-event .task-edit .time')
        this.disableButton('.daily-event .save')

        nameInput.value = ''
        timeInput.value = ''

        this.handleModalItem(dayIndex)
        this.renderDate()
    },
    createTask(dayIndex) {
        const calendarStorage = this.getStorage('calendar')
        const itemContainer = $('.task-list')
        const nameInput = $('.daily-event .task-edit .name')
        const timeInput = $('.daily-event .task-edit .time')
        const saveBtn = $('.daily-event .save')
        const removeBtn = $('.daily-event .remove')

        // Reset storage
        calendarStorage[dayIndex].task.push({
            name: 'New Task',
            time: '23:00'
        })
        localStorage.setItem('calendar', JSON.stringify(calendarStorage))

        // Get data from reseted storage
        const newHtmlsTask = calendarStorage[dayIndex].task.map((task, index) =>
            `<div data-index="${index}" class="item">
            <div class="name">${task.name}</div>
            <div class="time">${task.time}</div>
        </div>`)

        // Rerender container
        itemContainer.innerHTML = newHtmlsTask.join('')

        // Disable and clear button & inputs
        this.enableButton('.daily-event .remove')
        this.enableButton('.daily-event .task-edit .name')
        this.enableButton('.daily-event .task-edit .time')
        this.enableButton('.daily-event .save')

        nameInput.value = 'New Task'
        timeInput.value = '23:00'
        nameInput.focus()

        // Scroll container
        itemContainer.scrollTo(0, 1000000000000000)

        // Set active to new item
        const taskItems = $$('.daily-event .task-list .item')
        taskItems[Number(calendarStorage[dayIndex].task.length) - 1].classList.add('active')

        // Save item info
        saveBtn.onclick = () => {
            this.saveTask(dayIndex, Number(calendarStorage[dayIndex].task.length) - 1)
        }
        nameInput.onkeypress = (e) => {
            const key = e.key || e.code
            if (key == 'Enter') {
                this.saveTask(dayIndex, Number(calendarStorage[dayIndex].task.length) - 1)
            }
        }
        timeInput.onkeypress = (e) => {
            const key = e.key || e.code
            if (key == 'Enter') {
                this.saveTask(dayIndex, Number(calendarStorage[dayIndex].task.length) - 1)
            }
        }

        // Remove an item
        removeBtn.onclick = () => {
            this.removeTask(dayIndex, Number(calendarStorage[dayIndex].task.length) - 1)
        }

        this.renderDate()
    },
    renderDate() {
        const currentDate = new Date()
        const month = currentDate.getMonth()
        let monthString = 0
        const year = currentDate.getFullYear()
        let dayString = 0
        const day = currentDate.getDay()
        const date = currentDate.getDate() 

        dayString = this.getDayByIndex(day)
        monthString = this.getMonthByIndex(month)

        // Render title
        const htmlsTitle =
            `<h2>${dayString}</h2>,&nbsp;
            <h3>${monthString}</h3>&nbsp;
            <p>${date}</p>,&nbsp; 
            <span>${year}</span>`
        const dateContainer = $('.date')
        dateContainer.innerHTML = htmlsTitle

        // Set day to local storage
        const calendarStorage = this.getStorage('calendar')
        for (let i = 0; i < calendarStorage.length; i++) {
            const date = new Date(`${monthString} ${i + 1}, ${year}`);
            const day = date.getDay()

            calendarStorage[i].day = day
        }
        localStorage.setItem('calendar', JSON.stringify(calendarStorage))

        // Render calendar
        const scheduleItems = $$('.schedule .row.content .column')
        const firstIndex = calendarStorage[0].day - 1
        const lastIndex = (Number(firstIndex) + Number(calendarStorage.length)) - 1

        for (let i = firstIndex; i <= lastIndex; i++) {
            // Set text to items
            scheduleItems[i].querySelector('h3').innerText = calendarStorage[i - firstIndex].date
            scheduleItems[i].querySelector('p').innerText = `${calendarStorage[i - firstIndex].task.length} tasks`
            
            // Set emphasis to current day and events
            if (calendarStorage[i - firstIndex].task.length > 0) {
                scheduleItems[i].classList.add('active')
            }
            else {
                scheduleItems[i].classList.remove('active')
            }
            if (scheduleItems[i].querySelector('h3').innerText == date) {
                scheduleItems[i].classList.add('current')
            }
            else {
                scheduleItems[i].classList.remove('current')
            }
            if ((scheduleItems[i].querySelector('h3').innerText == date) && (calendarStorage[i - firstIndex].task.length > 0)) {
                scheduleItems[i].classList.add('event-today')
            }
            else {
                scheduleItems[i].classList.remove('event-today')
            }
        }

        // Set empty to other items
        for (let i = 0; i < firstIndex; i++) {
            scheduleItems[i].querySelector('p').innerText = ''
            scheduleItems[i].classList.add('empty')
        }
        for (let i = lastIndex + 1; i < scheduleItems.length; i++) {
            scheduleItems[i].querySelector('p').innerText = ''
            scheduleItems[i].classList.add('empty')
        }
    },
    getDayByIndex(day) {
        switch (day) {
            case 0:
                return 'Sunday'
                break;
            case 1:
                return 'Monday'
                break;
            case 2:
                return 'Tuesday'
                break;
            case 3:
                return 'Wednesday'
                break;
            case 4:
                return 'Thusday'
                break;
            case 5:
                return 'Friday'
                break;
            case 6:
                return 'Saturday'
                break;
        }
    },
    getMonthByIndex(month) {
        switch (month) {
            case 0:
                return 'January'
                break;
            case 1:
                return 'February'
                break;
            case 2:
                return 'March'
                break;
            case 3:
                return 'April'
                break;
            case 4:
                return 'May'
                break;
            case 5:
                return 'June'
                break;
            case 6:
                return 'July'
                break;
            case 7:
                return 'August'
                break;
            case 8:
                return 'September'
                break;
            case 9:
                return 'October'
                break;
            case 10:
                return 'November'
                break;
            case 11:
                return 'December'
                break;
        }
    },
    renderTask(dayIndex) {
        const calendarStorage = this.getStorage('calendar')
        const tasksChoosen = calendarStorage[dayIndex].task
        const modalBox = $('.modal-box')
        const monthString = this.getMonthByIndex(new Date().getMonth())
        const dayString = this.getDayByIndex(calendarStorage[dayIndex].day)
        const dailyEvent =
            `<div class="modal daily-event">
                <div class="container">
                    <div class="heading">
                        <div class="text">${dayString}, ${monthString} ${dayIndex + 1}, 2021</div>
                        <button class="close btn btn-remove"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="task-list">
                        ${tasksChoosen.map((task, index) =>
                            `<div data-index="${index}" class="item">
                                <div class="name">${task.name}</div>
                                <div class="time">${task.time}</div>
                            </div>`
                        ).join('') || 
                        `<div class="no-item">
                            <p>Click "Create" to add a new event !</p>
                            <img src="/img/pic-logo.png" alt="">
                        </div>`}
                    </div>
                    <div class="task-edit">
                        <input type="text" placeholder="Task name" class="name disabled" disabled>
                        <input type="time" placeholder="Task time" class="time disabled" disabled>
                        <button class="save btn btn-remove-2 disabled" disabled>Save</button>
                    </div>
                    <div class="buttons">
                        <button class="remove btn btn-remove disabled" disabled>Remove</button>
                        <button class="create btn btn-add-edit">Create</button>
                    </div>
                </div>
            </div>`

        modalBox.innerHTML = dailyEvent
    },
    start() {
        this.checkDate()
        this.renderDate()
        this.handleSchedule()

        notification.start()
    }
}

app.start()
