import notification from './notification.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

notification.start()

const app = {
    getStorage(name) {
        if (localStorage.getItem(name) === null) {
            localStorage.setItem(name, JSON.stringify({
                surname: 'Doe',
                firstname: 'John',
                email: 'johndoe@gmail.com',
                github: 'https://github.com/',
                role: 'Member of TodoApp',
            }))
        }
        return JSON.parse(localStorage.getItem(name))
    },
    renderTasksAmount() {
        const timeTableStorage = JSON.parse(localStorage.getItem('calendar'))
        const todoStorage = JSON.parse(localStorage.getItem('categories'))
        let countTimeTableTask = 0
        let countPendingTask = 0
        let countDoneTask = 0
        let countFailedTask = 0
        const container = $('.task-review')
        
        if (timeTableStorage != undefined && todoStorage != undefined) {
            for (let i = 0; i < timeTableStorage.length; i++) {
                if (timeTableStorage[i].task.length > 0) {
                    countTimeTableTask = countTimeTableTask + timeTableStorage[i].task.length
                }
            }
            for (let i = 0; i < todoStorage.length; i++) {
                if (todoStorage[i].inProgressTasks.length > 0) {
                    countPendingTask = countPendingTask + todoStorage[i].inProgressTasks.length
                }
                if (todoStorage[i].doneTasks.length > 0) {
                    countDoneTask = countDoneTask + todoStorage[i].doneTasks.length
                }
                if (todoStorage[i].failTasks.length > 0) {
                    countFailedTask = countFailedTask + todoStorage[i].failTasks.length
                }
            }
    
            const htmls = 
                `<a href="./timeTable.html" class="item">
                    <div class="heading">Timetable</div>
                    <div class="task-count">${countTimeTableTask}</div>
                </a>
                <a href="./todo.html" class="item">
                    <div class="heading">Pending Tasks</div>
                    <div class="task-count">${countPendingTask}</div>
                </a>
                <a href="./todo.html" class="item">
                    <div class="heading">Done Tasks</div>
                    <div class="task-count">${countDoneTask}</div>
                </a>
                <a href="./todo.html" class="item">
                    <div class="heading">Failed Tasks</div>
                    <div class="task-count">${countFailedTask}</div>
                </a>`
            container.innerHTML = htmls 
        }
        else {
            container.innerHTML = 
                `<a href="./timeTable.html" class="item">
                    <div class="heading">Timetable</div>
                    <div class="task-count">0</div>
                </a>
                <a href="./todo.html" class="item">
                    <div class="heading">Pending Tasks</div>
                    <div class="task-count">0</div>
                </a>
                <a href="./todo.html" class="item">
                    <div class="heading">Done Tasks</div>
                    <div class="task-count">0</div>
                </a>
                <a href="./todo.html" class="item">
                    <div class="heading">Failed Tasks</div>
                    <div class="task-count">0</div>
                </a>`
        }
    },
    renderInfo() {
        const storageInfo = this.getStorage('info')
        const container = $('.user-info')
        const wallPaper = $('.wallpaper')
        const htmls = 
            `<div class="sur-name">
                <label>Surname</label>
                <input id="name-input" type="text" placeholder="Your surname">
                <h3>${storageInfo.surname}</h3>
            </div>
            <div class="first-name">
                <label>Firstname</label>
                <input id="name-input" type="text" placeholder="Your firstname">
                <h3>${storageInfo.firstname}</h3>
            </div>
            <div class="email">
                <label>Email</label>
                <input id="email-input" type="email" placeholder="Your email">
                <h3>${storageInfo.email}</h3>
            </div>
            <div class="github">
                <label>Github</label>
                <input id="email-input" type="text" placeholder="Your github">
                <h3><a href="${storageInfo.github}">${storageInfo.github}</a></h3>
            </div>`
        const htmls2 = 
            `<div class="layer">
                <div class="avatar">
                    <img src="/img/default-avatar.jpg" alt="">
                </div>
                <div class="name">${storageInfo.firstname} ${storageInfo.surname}</div>
                <div class="description">${storageInfo.role}</div>
            </div>`

        container.innerHTML = htmls
        wallPaper.innerHTML = htmls2
    },
    handleEditInfo() {
        const storageInfo = this.getStorage('info')
        const editBtn = $('.info .buttons')
        const userInfoContainer = $('.user-info')
        const userInfoInput = $$('.user-info div input')

        editBtn.onclick = () => {
            editBtn.classList.add('editting')

            userInfoContainer.classList.add('editting')
            userInfoInput[0].focus()

            // Get info to input
            userInfoInput[0].value = storageInfo.surname
            userInfoInput[1].value = storageInfo.firstname
            userInfoInput[2].value = storageInfo.email
            userInfoInput[3].value = storageInfo.github

            // Save info
            this.handleSaveInfo()
        }
    },
    handleSaveInfo() {
        const storageInfo = this.getStorage('info')
        const userInfoContainer = $('.user-info')
        const userInfoInput = $$('.user-info div input')
        const editBtn = $('.info .buttons')
        const saveInfo = () => {
            editBtn.classList.remove('editting')
            userInfoContainer.classList.remove('editting')

            storageInfo.surname = userInfoInput[0].value == '' ? 'Doe' : userInfoInput[0].value
            storageInfo.firstname = userInfoInput[1].value == '' ? 'John' : userInfoInput[1].value
            storageInfo.email = userInfoInput[2].value == '' ? 'johndoe@gmail.com' : userInfoInput[2].value
            storageInfo.github = userInfoInput[3].value == '' ? 'https://github.com/' : userInfoInput[3].value

            localStorage.setItem('info', JSON.stringify(storageInfo))

            this.start()
        }

        editBtn.onclick = () => {
            saveInfo()
        }
        userInfoInput[0].onkeypress = (e) => {
            const key = e.key || e.code 
            if (key == 'Enter') {
                saveInfo()
            }
        }
        userInfoInput[1].onkeypress = (e) => {
            const key = e.key || e.code 
            if (key == 'Enter') {
                saveInfo()
            }
        }
        userInfoInput[2].onkeypress = (e) => {
            const key = e.key || e.code 
            if (key == 'Enter') {
                saveInfo()
            }
        }
        userInfoInput[3].onkeypress = (e) => {
            const key = e.key || e.code 
            if (key == 'Enter') {
                saveInfo()
            }
        }
    },
    start() {
        this.renderTasksAmount()
        this.renderInfo()
        this.handleEditInfo()
    }
}
app.start()