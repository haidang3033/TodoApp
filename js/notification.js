const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const notification = {
    addNewNotification(name) {
        let isNotice = this.getStorage('isNotice')
        const storageNotification = this.getStorage(name)
        const calendarStorage = JSON.parse(localStorage.getItem('calendar'))
        const currentDate = new Date().getDate() 
        const currentMonth = new Date().getMonth() + 1
        const currentYear = new Date().getFullYear()

        if (calendarStorage != undefined) {
            if (calendarStorage[currentDate - 1].task.length > 0) {
                storageNotification.push({
                    name: `You have ${calendarStorage[currentDate - 1].task.length} pending tasks today - ${currentDate}/${currentMonth}/${currentYear}. Manage your time effectively to finish them ^^!`,
                    link: './html/timeTable.html',
                })
                localStorage.setItem('notification', JSON.stringify(storageNotification))
            }
        }

        isNotice = true 
        localStorage.setItem('isNotice', JSON.stringify(isNotice))
        localStorage.setItem('notiLength', JSON.stringify(storageNotification.length))
    },
    setStorage(name) {
        let date = this.getStorage('date')
        let isNotice = this.getStorage('isNotice')
        const currentDate = new Date().getDate() 

        if (date != currentDate) {
            date = currentDate
            this.addNewNotification(name)

            localStorage.setItem('date', JSON.stringify(date))
        }
        else {
            if (isNotice == false) {
                this.addNewNotification(name)
            }
        }

    },
    getStorage(name) {
        if (name == 'notification') {
            if (localStorage.getItem(name) === null) {
                localStorage.setItem(name, JSON.stringify([
                    {
                        name: 'Welcome to TodoApp. Hope you have your best experience ❤️ !',
                        link: '/index.html',
                    }
                ]))
            }
        }
        else if (name == 'isNotice') {
            if (localStorage.getItem(name) === null) {
                localStorage.setItem(name, JSON.stringify(false))
            }
        }
        else {
            if (localStorage.getItem(name) === null) {
                localStorage.setItem(name, JSON.stringify(new Date().getDate()))
            }
        }
        return JSON.parse(localStorage.getItem(name))
    },
    resetStorage(name) {
        localStorage.setItem(name, JSON.stringify([]))
    },
    renderNotification() {
        const storageNotification = this.getStorage('notification')
        const notiList = $('.noti-list')
        const htmls = storageNotification.map((noti, index) => {
            return `<div class="item" data-index="${index}">
                        <img class="image" src="../img/pic-logo.png" alt="">
                        <div class="text">
                            <div class="content">${noti.name}</div>
                        </div>
                    </div>`
        })

        // Render noti list 
        if (htmls.length > 0) {
            notiList.innerHTML = htmls.join('')
        }
        else {
            notiList.innerHTML = 
                `<div class="no-item">
                    <p>You don't have any notifications</p>
                    <img src="../img/pic-logo.png" alt="">
                </div>`
        }

    },
    renderCountNoti() {
        const notiLength = JSON.parse(localStorage.getItem('notiLength'))
        const countNoti = $('.count-noti')

        // Render count noti 
        if (notiLength > 0) {
            countNoti.classList.remove('hide')
            countNoti.innerText = notiLength
            localStorage.setItem('notiLength', JSON.stringify(notiLength))
        }
        else {
            countNoti.classList.add('hide')
            countNoti.innerText = 0
            localStorage.setItem('notiLength', JSON.stringify(notiLength))
        }
    },
    handleClickBell() {
        const bell = $('.header__foot')
        const countNoti = $('.count-noti')
        const container = $('.notification-container')
        const containerList = $('.notification-container .noti-list')
        const clearBtn = $('.notification-container .title button')

        // Show & hide notification box
        bell.onclick = () => {
            bell.classList.toggle('active')
            this.renderNotification()
    
            // Hide noti count
            countNoti.classList.add('hide')
            localStorage.setItem('notiLength', JSON.stringify(0))
        }
        container.onclick = (e) => {
            e.stopPropagation()
        }
        document.onclick = (e) => {
            if (!e.target.closest('.header__foot')) {
                bell.classList.remove('active')
            }
        }

        // Redirect when click on notification
        containerList.onclick = (e) => {
            const selectedItem = e.target.closest('.item')
            if (selectedItem) {
                this.handleClickNoti(selectedItem.dataset.index)
            }
        }

        // Clear notification
        clearBtn.onclick = () => {
            this.handleDeleteAll()
        }
    },
    handleClickNoti(notiIndex) {
        const storageNotification = this.getStorage('notification')
        
        window.location = storageNotification[notiIndex].link
    },
    handleDeleteAll() {
        const bell = $('.header__foot')

        this.resetStorage('notification')
        this.renderNotification()

        bell.classList.remove('active')
    },
    start() {
        this.setStorage('notification')
        this.renderCountNoti()
        this.handleClickBell()
    }
}

export default notification;