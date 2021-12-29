const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const timerComponent = {
    getStorage(name) {
        if (name === 'timerSetting') {
            if (localStorage.getItem(name) === null) {
                localStorage.setItem(name, JSON.stringify(
                    {
                        name: 'Task name',
                        hour: '00',
                        minute: '00',
                        second: '00',
                        desc: 'Task description',
                        countTime: 0,
                        maxCountTime: 0,
                        isCount: false,
                    }
                ))
            }
            return JSON.parse(localStorage.getItem(name))
        }
    },
    enableBtn(className) {
        const btn = $(`${className}`)
        btn.classList.remove('disabled')
        btn.disabled = false
    },
    disableBtn(className) {
        const btn = $(`${className}`)
        btn.classList.add('disabled')
        btn.disabled = true
    },
    renderSetting() {
        const settingStorage = this.getStorage('timerSetting')
        const settingZone = $$('.task-list')[0]
        const htmls =
            `<div class="task-list__title">Setting</div>
        <div class="task-list__info">
            <div class="item task-name">
                <div class="text-zone">${settingStorage.name}</div>
                <div class="edit-zone">
                    <input type="text" class="task-name-edit" placeholder="Task name">
                </div>
            </div>
            <div class="item task-time">
                <div class="text-zone">
                    <span>${settingStorage.hour}</span>
                    :
                    <span>${settingStorage.minute}</span>
                    :
                    <span>${settingStorage.second}</span>
                </div>
                <div class="edit-zone">
                    <input type="text" placeholder="00" class="time" pattern="[0 - 9]" maxlength="2">
                    <span>:</span>
                    <input type="text" placeholder="00" class="time" pattern="[0 - 9]" maxlength="2">
                    <span>:</span>
                    <input type="text" placeholder="00" class="time" pattern="[0 - 9]" maxlength="2">
                </div>
            </div>
            <div class="item task-description">
                <div class="text-zone">${settingStorage.desc}</div>
                <div class="edit-zone">
                    <textarea name="" id="" maxlength="500" placeholder="Task description"></textarea>
                    <div class="count-word">${settingStorage.desc.length}/500</div>
                </div>
            </div>
        </div>
        <div class="task-list__buttons">
            <button class="setting btn btn-add-edit">
                <i class="fas fa-cog setting-btn"></i>
            </button>
            <button class="save btn btn-done">
                <i class="fas fa-check confirm-btn"></i>
            </button>
        </div>`

        settingZone.innerHTML = htmls

        if ($('.countdown').classList.contains('play')) {
            this.disableBtn('.task-list__buttons .setting')
        }
        else {
            this.enableBtn('.task-list__buttons .setting')
            this.editSetting()
        }
    },
    renderCountdown() {
        const settingStorage = this.getStorage('timerSetting')
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const countdownContainer = $('.countdown')
        const htmls =
            `<div class="countdown__title">${settingStorage.name}</div>
        <div class="countdown__time">
            <div class="inner"></div>
            <div class="text">
                <span class="hour">${Math.floor(settingStorage.countTime / hour) < 10 ? '0' + Math.floor(settingStorage.countTime / hour) : Math.floor(settingStorage.countTime / hour)}</span>&nbsp;
                <span>:&nbsp;</span>
                <span class="minute">${Math.floor((settingStorage.countTime % hour) / minute) < 10 ? '0' + Math.floor((settingStorage.countTime % hour) / minute) : Math.floor((settingStorage.countTime % hour) / minute)}</span>&nbsp;
                <span>:&nbsp;</span>
                <span class="second">${Math.floor((settingStorage.countTime % minute) / second) < 10 ? '0' + Math.floor((settingStorage.countTime % minute) / second) : Math.floor((settingStorage.countTime % minute) / second)}</span>
            </div>
            <div class="circle">
                <div class="bar right">
                    <div class="progress"></div>
                </div>
                <div class="bar left">
                    <div class="progress"></div>
                </div>
            </div>
        </div>
        <div class="countdown__buttons">
            <button class="stop btn btn-remove">
                <i class="fas fa-stop"></i>
            </button>
            <button class="play-pause btn btn-add-edit">
                <i class="fas fa-pause pause"></i>
                <i class="fas fa-play play"></i>
            </button>
        </div>`

        // Render countdown htmls
        countdownContainer.innerHTML = htmls

        // Render the round time line
        const rightProgress = $('.countdown__time .circle .right .progress')
        const leftProgress = $('.countdown__time .circle .left .progress')
        const maxTime = this.getStorage('timerSetting').maxCountTime
        const halfOfTime = maxTime / 2
        const currentTime = maxTime - this.getStorage('timerSetting').countTime

        if (currentTime > halfOfTime) {
            // In case the current time > half time
            leftProgress.style.transform = `rotate(${180 - ((maxTime - currentTime) / halfOfTime * 180)}deg)`
            rightProgress.style.transform = `rotate(180deg)`
        }
        else {
            // In case the current time <= half time
            rightProgress.style.transform = `rotate(${currentTime / halfOfTime * 180}deg)`
        }

        // Disable buttons
        if (
            $('.countdown__time .hour').innerText == '00' &&
            $('.countdown__time .minute').innerText == '00' &&
            $('.countdown__time .second').innerText == '00'
        ) {
            this.disableBtn('.countdown__buttons .stop')
            this.disableBtn('.countdown__buttons .play-pause')
        }
        else {
            this.enableBtn('.countdown__buttons .stop')
            this.enableBtn('.countdown__buttons .play-pause')
        }

        // Call handle countdown
        this.handleCountdown()
    },
    editSetting() {
        const settingStorage = this.getStorage('timerSetting')
        const taskName = $('.task-name')
        const taskTime = $('.task-time')
        const taskDesc = $('.task-description')
        const editNameInput = taskName.querySelector('.edit-zone input')
        const editDescInput = taskDesc.querySelector('.edit-zone textarea')
        const editInputHour = taskTime.querySelectorAll('.edit-zone input')[0]
        const editInputMinute = taskTime.querySelectorAll('.edit-zone input')[1]
        const editInputSecond = taskTime.querySelectorAll('.edit-zone input')[2]
        const taskListButtons = $('.task-list__buttons')
        const editButton = $('.task-list__buttons .setting')
        const saveButton = $('.task-list__buttons .save')
        const saveInfo = () => {
            settingStorage.name = editNameInput.value.trim() === '' ? 'Task name' : editNameInput.value
            if (editInputHour.value.length == 1) {
                settingStorage.hour = '0' + editInputHour.value
            }
            else {
                settingStorage.hour = editInputHour.value === '' ? '00' : editInputHour.value
            }
            if (editInputMinute.value.length == 1) {
                settingStorage.minute = '0' + editInputMinute.value
            }
            else {
                settingStorage.minute = editInputMinute.value === '' ? '00' : editInputMinute.value
            }
            if (editInputSecond.value.length == 1) {
                settingStorage.second = '0' + editInputSecond.value
            }
            else {
                settingStorage.second = editInputSecond.value === '' ? '00' : editInputSecond.value
            }
            settingStorage.desc = editDescInput.value.trim() === '' ? 'Task description' : editDescInput.value.trim()
            settingStorage.countTime = Number(settingStorage.hour) * 3600000 + Number(settingStorage.minute) * 60000 + Number(settingStorage.second) * 1000
            settingStorage.maxCountTime = Number(settingStorage.hour) * 3600000 + Number(settingStorage.minute) * 60000 + Number(settingStorage.second) * 1000

            localStorage.setItem('timerSetting', JSON.stringify(settingStorage))

            this.renderCountdown()
            this.renderSetting()
        }
        const editName = () => {
            const content = taskName.querySelector('.text-zone')

            taskName.classList.add('editting')
            editNameInput.value = content.innerText.trim()
            editNameInput.focus()
        }
        const editTime = () => {
            const contentHour = taskTime.querySelectorAll('.text-zone span')[0]
            const contentMinute = taskTime.querySelectorAll('.text-zone span')[1]
            const contentSecond = taskTime.querySelectorAll('.text-zone span')[2]

            taskTime.classList.add('editting')
            editInputHour.value = contentHour.innerText
            editInputMinute.value = contentMinute.innerText
            editInputSecond.value = contentSecond.innerText
        }
        const editDesc = () => {
            const content = taskDesc.querySelector('.text-zone')

            taskDesc.classList.add('editting')
            editDescInput.value = content.innerText.trim()
        }

        // Edit info
        editButton.onclick = () => {
            editName()
            editTime()
            editDesc()
            taskListButtons.classList.add('save')
            this.disableBtn('.countdown__buttons .stop')
            this.disableBtn('.countdown__buttons .play-pause')
        }

        // Save info
        saveButton.onclick = () => {
            this.checkTimeInput(editInputHour, editInputMinute, editInputSecond, saveInfo)
        }
        editNameInput.onkeypress = (e) => {
            const key = e.key || e.code
            if (key === 'Enter') {
                this.checkTimeInput(editInputHour, editInputMinute, editInputSecond, saveInfo)
            }
        }
        editDescInput.oninput = () => {
            const countWord = $('.count-word')
            countWord.innerText = editDescInput.value.length + '/500'
        }
        editInputHour.onkeypress = (e) => {
            const key = e.key || e.code
            if (key === 'Enter') {
                this.checkTimeInput(editInputHour, editInputMinute, editInputSecond, saveInfo)
            }
        }
        editInputMinute.onkeypress = (e) => {
            const key = e.key || e.code
            if (key === 'Enter') {
                this.checkTimeInput(editInputHour, editInputMinute, editInputSecond, saveInfo)
            }
        }
        editInputSecond.onkeypress = (e) => {
            const key = e.key || e.code
            if (key === 'Enter') {
                this.checkTimeInput(editInputHour, editInputMinute, editInputSecond, saveInfo)
            }
        }
    },
    checkTimeInput(editInputHour, editInputMinute, editInputSecond, saveInfo) {
        if (
            Number(editInputMinute.value) > 59 ||
            Number(editInputSecond.value) > 59 ||
            Number.isInteger(Number(editInputHour.value)) == false ||
            Number.isInteger(Number(editInputMinute.value)) == false ||
            Number.isInteger(Number(editInputSecond.value)) == false
        ) {
            alert('Oops. Some infomation was wrong :<')
        }
        else {
            const taskListButtons = $('.task-list__buttons')
            taskListButtons.classList.remove('save')
            saveInfo()
        }
    },
    handleCountdown() {
        const countdown = $('.countdown')
        const stopBtn = $('.countdown__buttons .stop')
        const playpauseBtn = $('.countdown__buttons .play-pause')

        playpauseBtn.onclick = () => {
            countdown.classList.toggle('play')
            if (countdown.classList.contains('play')) {
                this.intervalVar = setInterval(() => this.count(), 1000);
                this.intervalVar2 = setInterval(() => this.runCircle(), 1);
            }
            else {
                this.pause()
            }
            this.renderSetting()
        }
        stopBtn.onclick = () => {
            this.stop()
        }
    },
    count() {
        const settingStorage = this.getStorage('timerSetting')

        const hourText = $('.countdown__time .hour')
        const minuteText = $('.countdown__time .minute')
        const secondText = $('.countdown__time .second')

        const second = 1000
        const minute = second * 60
        const hour = minute * 60

        // Reset timer storage
        settingStorage.isCount = true
        settingStorage.countTime = settingStorage.countTime - 1000

        // Set text hour, minute, second
        hourText.innerText = Math.floor(settingStorage.countTime / hour) < 10 ? '0' + Math.floor(settingStorage.countTime / hour) : Math.floor(settingStorage.countTime / hour)
        minuteText.innerText = Math.floor((settingStorage.countTime % hour) / minute) < 10 ? '0' + Math.floor((settingStorage.countTime % hour) / minute) : Math.floor((settingStorage.countTime % hour) / minute)
        secondText.innerText = Math.floor((settingStorage.countTime % minute) / second) < 10 ? '0' + Math.floor((settingStorage.countTime % minute) / second) : Math.floor((settingStorage.countTime % minute) / second)

        // Detect stop condition
        if (settingStorage.countTime <= 0) {
            setTimeout(() => this.stop(), 1000);
            settingStorage.isCount = false
        }
        localStorage.setItem('timerSetting', JSON.stringify(settingStorage))
    },
    runCircle() {
        const rightProgress = $('.countdown__time .circle .right .progress')
        const leftProgress = $('.countdown__time .circle .left .progress')
        const maxTime = this.getStorage('timerSetting').maxCountTime
        const halfOfTime = this.getStorage('timerSetting').maxCountTime / 2
        const currentTime = maxTime - this.getStorage('timerSetting').countTime

        if (currentTime > halfOfTime) {
            // In case the current time > half time
            leftProgress.style.transform = `rotate(${180 - ((maxTime - currentTime) / halfOfTime * 180)}deg)`
            rightProgress.style.transform = `rotate(180deg)`
        }
        else {
            // In case the current time <= half time
            rightProgress.style.transform = `rotate(${currentTime / halfOfTime * 180}deg)`
        }
    },
    pause() {
        const settingStorage = this.getStorage('timerSetting')

        // Reset timer storage
        settingStorage.isCount = false
        localStorage.setItem('timerSetting', JSON.stringify(settingStorage))
        
        // Clear interval
        clearInterval(this.intervalVar)
        clearInterval(this.intervalVar2)
    },
    stop() {
        const countdown = $('.countdown')
        const settingStorage = this.getStorage('timerSetting')

        // Reset timer storage
        settingStorage.countTime = 0
        settingStorage.hour = '00'
        settingStorage.minute = '00'
        settingStorage.second = '00'
        settingStorage.isCount = false
        localStorage.setItem('timerSetting', JSON.stringify(settingStorage))
        
        // Remove class play
        countdown.classList.remove('play')
        
        // Clear interval
        clearInterval(this.intervalVar)
        clearInterval(this.intervalVar2)
        
        // Rerender setting and countdown zone
        this.renderCountdown()
        this.renderSetting()
    },
    render() {
        this.renderSetting()
        this.renderCountdown()
    },
    start() {
        this.render()
    }
}

export default timerComponent