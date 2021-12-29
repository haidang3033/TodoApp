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
    getTabNameByIndex(tabIndex) {
        switch (tabIndex) {
            case '0':
                return 'inProgressTasks'
                break;
            case '1':
                return 'doneTasks'
                break;
            case '2':
                return 'failTasks'
                break;
            default:
                return 'inProgressTasks'
                break;
        }
    },
    getStorage(name, defaultValue = 'General') {
        if (localStorage.getItem(name) === null) {
            localStorage.setItem(name, JSON.stringify([
                {
                    name: defaultValue,
                    inProgressTasks: [
                        {
                            heading: 'Start managing your tasks with TodoApp',
                            startTime: '02:00',
                            endTime: '03:00',
                            description: 'No description',
                            status: ''
                        }
                    ],
                    doneTasks: [],
                    failTasks: []
                }
            ]))
        }
        return JSON.parse(localStorage.getItem(name))
    },
    chooseTab(groupIndex) {
        const navContainer = $('.todo-list__nav')
        navContainer.onclick = (e) => {
            const selectedItem = e.target.closest('.nav-item')
            const bottomLine = $('.todo-list__nav .bottom-line')
            if (selectedItem) {
                const navItems = $$('.todo-list__nav .nav-item')
                for (let i = 0; i < navItems.length; i++) {
                    if (navItems[i].classList.contains('active')) {
                        navItems[i].classList.remove('active')
                    }
                }
                selectedItem.classList.add('active')
                bottomLine.style.width = selectedItem.offsetWidth + 'px'
                bottomLine.style.transform = `translateX(${selectedItem.offsetLeft - 30}px)`
                switch (selectedItem.dataset.index) {
                    case '0':
                        bottomLine.style.backgroundColor = '#a797f3'
                        this.renderList(groupIndex, '0')
                        break;
                    case '1':
                        bottomLine.style.backgroundColor = '#53db89'
                        this.renderList(groupIndex, '1')
                        this.disableButton('.todo-list .todo-add');
                        break;
                    case '2':
                        bottomLine.style.backgroundColor = '#e45858'
                        this.renderList(groupIndex, '2')
                        this.disableButton('.todo-list .todo-add');
                        break;
                    default:
                        bottomLine.style.backgroundColor = '#a797f3'
                        break;
                }
                this.handleTask(groupIndex, selectedItem.dataset.index)
            }
        }
    },
    resetTab() {
        const navItems = $$('.todo-list__nav .nav-item')
        const bottomLine = $('.bottom-line')

        // Reset property of tab
        navItems[0].classList.add('active')
        navItems[1].classList.remove('active')
        navItems[2].classList.remove('active')

        // Reset property of bottom line
        bottomLine.style.width = navItems[0].offsetWidth + 'px'
        bottomLine.style.transform = `translateX(${navItems[0].offsetLeft - 30}px)`
        bottomLine.style.backgroundColor = '#a797f3'
    },
    handleTask(groupIndex, tabIndex) {
        const worksList = $('.works-list')
        const removeAllBtn = $('.todo-list .todo-remove-all')
        const createTaskBtn = $('.todo-list .todo-add')
        // Choose item
        worksList.onclick = (e) => {
            const items = $$('.works-list .item')
            const item = e.target.closest('.item')
            const removeBtn = e.target.closest('.item .remove')
            const editBtn = e.target.closest('.item .detail')
            if (item) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].classList.contains('active')) {
                        items[i].classList.remove('active')
                    }
                }
                item.classList.add('active')
            }
            if (removeBtn) {
                this.removeTask(item.dataset.index, groupIndex, tabIndex)
            }
            if (editBtn) {
                this.editTask(groupIndex, tabIndex, item.dataset.index)
            }
        }
        removeAllBtn.onclick = () => {
            this.removeAllTasks(groupIndex, tabIndex)
        }
        createTaskBtn.onclick = () => {
            this.createTask(groupIndex, tabIndex)
        }
    },
    removeTask(taskIndex, groupIndex, tabIndex) {
        const tabName = this.getTabNameByIndex(tabIndex)
        const storage = this.getStorage('categories')
        storage[groupIndex][tabName].splice(taskIndex, 1)
        localStorage.setItem('categories', JSON.stringify(storage))
        this.renderNumberOfTasks(groupIndex)
        this.renderList(groupIndex, tabIndex)
        if (tabIndex == '1' || tabIndex == '2') {
            this.disableButton('.todo-list .todo-add')
        }
    },
    removeAllTasks(groupIndex, tabIndex) {
        const storage = this.getStorage('categories')
        const modalBox = $('.modal-box')
        const removeAllModal =
            `<div class="modal remove-all-modal">
                <div class="modal__container">
                    <div class="content">
                        <img class="modal__image" src="/img/pic-logo.png" alt="">
                        <div class="modal__text">
                            <h3>Are you sure to remove all items ?</h3>
                            <p>They will be permanently removed</p>
                        </div>
                    </div>
                    <div class="image">
                        <img src="/img/img1.png" alt="">
                    </div>
                    <div class="modal__button">
                        <button class="cancel btn btn-remove-2">Cancel</button>
                        <button class="confirm btn btn-remove">Confirm</button>
                    </div>
                </div>
            </div>`
        modalBox.innerHTML = removeAllModal
        const modal = $('.remove-all-modal')
        const modalContainer = $('.remove-all-modal .modal__container')
        const cancelBtn = $('.modal__button .cancel')
        const confirmBtn = $('.modal__button .confirm')
        modalContainer.onclick = (e) => {
            e.stopPropagation()
        }
        modal.onclick = () => {
            modalBox.innerHTML = ''
        }
        cancelBtn.onclick = () => {
            modalBox.innerHTML = ''
        }
        confirmBtn.onclick = () => {
            const tabName = this.getTabNameByIndex(tabIndex)

            // Reset storage
            storage[groupIndex][tabName] = []
            localStorage.setItem('categories', JSON.stringify(storage))

            // Render number of tasks and list item
            this.renderNumberOfTasks(groupIndex)
            this.renderList(groupIndex, tabIndex)

            modalBox.innerHTML = ''

            // Disable resolved and failed tab
            if (tabIndex == '1' || tabIndex == '2') {
                this.disableButton('.todo-list .todo-add')
            }
        }
    },
    createTask(groupIndex, tabIndex) {
        const tabName = this.getTabNameByIndex(tabIndex)
        const worksList = $('.works-list')
        const storage = this.getStorage('categories')
        const newTaskIndex = storage[groupIndex][tabName].length
        storage[groupIndex][tabName].push({
            heading: newTaskIndex === 0 ? 'New Task' : 'New Task ' + newTaskIndex,
            startTime: '02:00',
            endTime: '03:00',
            description: 'No description',
            status: ''
        })
        localStorage.setItem('categories', JSON.stringify(storage))
        this.renderNumberOfTasks(groupIndex)
        this.renderList(groupIndex)
        const items = $$('.works-list .item')
        items[newTaskIndex].classList.add('active')
        worksList.scrollTo(0, 1000000000000000)
        this.editTask(groupIndex, tabIndex, newTaskIndex)
    },
    handleInfoModal(groupIndex, tabIndex, taskIndex) {
        const tabName = this.getTabNameByIndex(tabIndex)
        const storage = this.getStorage('categories')
        const modalBox = $('.modal-box')
        const itemDetail =
            `<div class="item-detail-background">
                <div class="item-detail ${storage[groupIndex][tabName][taskIndex].status === 'done' ? 'done' : storage[groupIndex][tabName][taskIndex].status === 'fail' ? 'fail' : ''}">
                    <div class="main-body">
                        <div class="modal__heading">Heading: </div>
                        <div class="modal__header">
                            <h3 class="edit-header">${storage[groupIndex][tabName][taskIndex].heading}</h3>
                            <input class="edit-input" type="text" placeholder="New Task ${taskIndex == 0 ? '' : taskIndex}">
                        </div>
                        <div class="modal__time-status">
                            <div class="time">
                                <div class="modal__heading">Time: </div>
                                <div class="content">
                                    <h3 class="start-time-heading">${storage[groupIndex][tabName][taskIndex].startTime}</h3>
                                    <div class="dash">-</div>
                                    <h3 class="end-time-heading">${storage[groupIndex][tabName][taskIndex].endTime}</h3>
                                </div>
                            </div>
                            <div class="status">
                                <div class="modal__heading">Status: </div>
                                <div class="content"></div>
                            </div>
                        </div>
                        <div class="modal__heading">Description:</div>
                        <div class="modal__description">
                            <div class="desc">
                                <p>${storage[groupIndex][tabName][taskIndex].description}</p>
                                <textarea class="edit-input" name="" id="" cols="30" rows="10" placeholder="No description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal__handle">
                        <button class="done btn btn-done"><i class="fas fa-check"></i></button>
                        <button class="fail btn btn-fail"><i class="fas fa-times"></i></button>
                        <button class="remove btn btn-remove-2"><i class="fas fa-trash"></i></button>
                        <button class="close btn btn-add-edit"><i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
            </div>`

        // Render item to DOM
        modalBox.innerHTML = itemDetail
        setTimeout(() => {
            itemDetailElement.classList.add('show')
        }, 0)

        // Show / hide modal
        const itemDetailBackground = $('.item-detail-background')
        const itemDetailElement = $('.item-detail')
        const closeBtn = $('.item-detail .close')
        const hideModal = () => {
            itemDetailElement.classList.remove('show')
            setTimeout(() => {
                modalBox.innerHTML = ''
            }, 500)
        }

        closeBtn.onclick = () => {
            hideModal()
        }
        itemDetailBackground.onclick = () => {
            hideModal()
        }
        itemDetailElement.onclick = (e) => {
            e.stopPropagation()
        }
    },
    editInfoModalHeading(groupIndex, tabIndex, tabName, taskIndex) {
        const storage = this.getStorage('categories')
        const editHeadingInput = $('.item-detail .modal__header .edit-input')
        const heading = $('.item-detail .modal__header .edit-header')
        const modalHeader = $('.item-detail .modal__header')
        const promise = new Promise((resolve) => {
            resolve(() => {
                this.renderList(groupIndex, tabIndex)
            })
        })
        const saveInfo = () => {
            modalHeader.classList.remove('editting')
            heading.innerText = editHeadingInput.value.trim()
            if (editHeadingInput.value.trim() === '') {
                storage[groupIndex][tabName][taskIndex].heading = 'New task ' + (taskIndex == 0 ? '' : taskIndex)
                heading.innerText = 'New task ' + (taskIndex == 0 ? '' : taskIndex)
            }
            else {
                storage[groupIndex][tabName][taskIndex].heading = editHeadingInput.value.trim()
            }
            localStorage.setItem('categories', JSON.stringify(storage))
            promise
                .then((renderList) => {
                    renderList()
                    return (() => {
                        const listItems = $$('.works-list .item')
                        listItems[taskIndex].classList.add('active')
                    })
                })
                .then((setActive) => {
                    setActive()
                })
        }
        modalHeader.classList.add('editting')
        editHeadingInput.focus()
        editHeadingInput.value = heading.innerText.trim()
        editHeadingInput.onkeypress = (e) => {
            const key = e.code || e.key
            if (key === 'Enter') {
                saveInfo()
            }
        }
        editHeadingInput.onblur = () => {
            saveInfo()
        }
    },
    editTask(groupIndex, tabIndex, taskIndex) {
        const tabName = this.getTabNameByIndex(tabIndex)
        this.handleInfoModal(groupIndex, tabIndex, taskIndex)

        // Handle info
        const editHeadingBtn = $('.item-detail .modal__header .edit-header')
        const doneBtn = $('.item-detail .modal__handle .done')
        const failBtn = $('.item-detail .modal__handle .fail')
        const editDescBtn = $('.item-detail .modal__description')
        const editTimeBtn = $('.item-detail .modal__time-status .time .content')
        const removeBtn = $('.item-detail .modal__handle .remove')

        // Click edit heading
        editHeadingBtn.onclick = () => {
            this.editInfoModalHeading(groupIndex, tabIndex, tabName, taskIndex)
        }

        // Click mark done || fail || remove 
        doneBtn.onclick = () => {
            this.markTask('doneTasks', taskIndex, groupIndex)
        }
        failBtn.onclick = () => {
            this.markTask('failTasks', taskIndex, groupIndex)
        }

        // Click to edit description
        editDescBtn.onclick = () => {
            this.editDescription(groupIndex, tabIndex, taskIndex)
        }

        // Click to edit time
        editTimeBtn.onclick = () => {
            this.editTime(groupIndex, tabIndex, taskIndex)
        }

        // Click to remove
        removeBtn.onclick = () => {
            const modalBox = $('.modal-box')
            const itemDetailElement = $('.item-detail')
            this.removeTask(taskIndex, groupIndex, tabIndex)
            itemDetailElement.classList.remove('show')
            setTimeout(() => {
                modalBox.innerHTML = ''
            }, 500)
        }
    },
    markTask(tabName, taskIndex, groupIndex) {
        const modalBox = $('.modal-box')
        const storage = this.getStorage('categories')
        const itemDetailElement = $('.item-detail')
        const taskArray = storage[groupIndex][tabName]
        const lastItemIndex = taskArray.length
        const groups = $$('.todo-group .todo__item')
        const promise = new Promise((resolve) => {
            resolve(() => {
                this.renderGroup()
            })
        })
        itemDetailElement.classList.add(`${tabName == 'doneTasks' ? 'done' : 'fail'}`)

        // Move to done/fail tab
        taskArray.push(storage[groupIndex]['inProgressTasks'][Number(taskIndex)])
        storage[groupIndex]['inProgressTasks'].splice(Number(taskIndex), 1)
        if (tabName == 'doneTasks') {
            taskArray[lastItemIndex].status = 'done'
        }
        else {
            taskArray[lastItemIndex].status = 'fail'
        }

        // Reset storage
        localStorage.setItem('categories', JSON.stringify(storage))
        this.renderList(groupIndex)
        promise
            .then(() => {
                groups[groupIndex].classList.add('active')
            })

        itemDetailElement.classList.remove('show')
        setTimeout(() => {
            modalBox.innerHTML = ''
        }, 500)
    },
    editDescription(groupIndex, tabIndex, taskIndex) {
        const storage = this.getStorage('categories')
        const tabName = this.getTabNameByIndex(tabIndex)
        const modalDescription = $('.modal__description')
        const descriptionText = $('.modal__description .desc p')
        const editInput = $('.desc .edit-input')
        const saveInfo = () => {
            descriptionText.innerText = editInput.value.trim() === '' ? 'No description' : editInput.value.trim()
            storage[groupIndex][tabName][taskIndex].description = editInput.value.trim() === '' ? 'No description' : editInput.value.trim()
            modalDescription.classList.remove('editting')
            localStorage.setItem('categories', JSON.stringify(storage))
        }

        // Change to editting condition
        modalDescription.classList.add('editting')

        // Get description from local storage
        editInput.value = storage[groupIndex][tabName][taskIndex].description
        editInput.focus()

        // Reset content
        editInput.onblur = () => {
            saveInfo()
        }
    },
    editTime(groupIndex, tabIndex, taskIndex) {
        const storage = this.getStorage('categories')
        const tabName = this.getTabNameByIndex(tabIndex)
        const timeZone = $('.item-detail .modal__time-status .time')
        const subModalBox = $('.sub-modal-box')
        const timeModal =
            `<div class="time-modal-background">
                <div class="container ${tabIndex == '0' ? '' : tabIndex == '1' ? 'done' : 'fail'}">
                    <div class="item">
                        <label for="">Start Time :</label>
                        <input type="time" class="start-time">
                    </div>
                    <div class="item">
                        <label for="">End Time :</label>
                        <input type="time" class="end-time">    
                    </div>
                    <div class="buttons">
                        <button class="cancel-btn btn btn-remove-2">Cancel</button>
                        <button class="submit-btn btn ${tabIndex == '0' ? 'btn-add-edit' : tabIndex == '1' ? 'btn-done' : 'btn-fail'}">Save</button>
                    </div>
                </div>
            </div>`

        // Render sub modal
        subModalBox.innerHTML = timeModal

        // Get element from modal recent sub modal
        const timeModalBackground = $('.time-modal-background')
        const timeModalContainer = $('.time-modal-background .container')
        const cancelBtn = $('.time-modal-background .cancel-btn')
        const submitBtn = $('.time-modal-background .submit-btn')

        // Change to edit mode
        timeZone.classList.add('editting')

        // Close sub modal
        timeModalBackground.onclick = () => {
            subModalBox.innerHTML = ''
            timeZone.classList.remove('editting')
        }
        cancelBtn.onclick = () => {
            subModalBox.innerHTML = ''
            timeZone.classList.remove('editting')
        }
        timeModalContainer.onclick = (e) => {
            e.stopPropagation()
        }

        const startTimeInput = $('.time-modal-background .start-time')
        const endTimeInput = $('.time-modal-background .end-time')
        const startTimeText = $('.item-detail .time .start-time-heading')
        const endTimeText = $('.item-detail .time .end-time-heading')

        // Get content from time zone
        startTimeInput.value = startTimeText.innerText
        endTimeInput.value = endTimeText.innerText

        // Submit info to storage
        submitBtn.onclick = () => {
            // Set to storage array & text content
            if (startTimeInput.value === '' || endTimeInput.value === '') {
                alert('You must entered full infomation')
            }
            else {
                storage[groupIndex][tabName][taskIndex].startTime = startTimeInput.value
                storage[groupIndex][tabName][taskIndex].endTime = endTimeInput.value
                startTimeText.innerText = startTimeInput.value
                endTimeText.innerText = endTimeInput.value
                // Render to storage & rerender list 
                localStorage.setItem('categories', JSON.stringify(storage))
                this.renderList(groupIndex, tabIndex)

                // Close sub modal
                subModalBox.innerText = ''
                timeZone.classList.remove('editting')
            }
        }
    },
    renderNumberOfTasks(groupIndex) {
        const storage = this.getStorage('categories')
        const numberOfTask = $('.todo__item.active p')
        const totalTask = storage[groupIndex]['inProgressTasks'].length + storage[groupIndex]['doneTasks'].length + storage[groupIndex]['failTasks'].length
        numberOfTask.innerText = totalTask + ' Tasks'
    },
    handleGroup() {
        const todoView = $('.todo-view')
        const createBtn = $('.todo-group .todo-add')
        const removeAllBtn = $('.todo-group .todo-remove-all')
        todoView.onclick = (e) => {
            const tabItem = $('.todo-list .todo-list__nav')
            const selectedItem = e.target.closest('.todo__item')
            const item = $$('.todo__item')
            const editBtn = e.target.closest('.todo__item.active .edit')
            const removeBtn = e.target.closest('.todo__item.active .remove')
            const editInput = e.target.closest('.todo__item.active .edit-input')

            // Choose group
            if (selectedItem && !editBtn && !editInput) {
                // Render relevant list
                if (selectedItem.classList.contains('active') != true) {
                    this.renderList(selectedItem.dataset.index, 0)
                    this.resetTab()
                }

                // Set active to group
                for (let i = 0; i < item.length; i++) {
                    if (item[i].classList.contains('active')) {
                        item[i].classList.remove('active')
                    }
                }
                selectedItem.classList.add('active')
                this.chooseTab(selectedItem.dataset.index)
                tabItem.classList.remove('disabled')
            }
            
            // Edit function    
            if (editBtn) {
                this.editGroup(selectedItem.dataset.index)
            }

            // Remove function    
            if (removeBtn) {
                this.removeGroup(selectedItem.dataset.index)
            }
        }
        createBtn.onclick = () => {
            this.createGroup()
        }
        removeAllBtn.onclick = () => {
            this.removeAll(JSON.stringify([]))
        }
    },
    editGroup(index) {
        const storage = this.getStorage('categories')
        const groups = $$('.todo__item')
        const selectedItem = groups[index]
        const editInput = groups[index].querySelector('.edit-input')
        const heading = groups[index].querySelector('.text__header h3')
        const saveInfo = () => {
            const tabItem = $('.todo-list .todo-list__nav')
            const todoListHeader = $('.todo-list__header')
            if (editInput.value.trim() === '') {
                if (index == 0) {
                    storage[index].name = 'New Group'
                    heading.innerText = 'New Group'
                    todoListHeader.innerText = 'New Group'
                }
                else {
                    storage[index].name = 'New Group ' + index
                    heading.innerText = 'New Group ' + index
                    todoListHeader.innerText = 'New Group ' + index
                }
            }
            else {
                storage[index].name = editInput.value.trim()
                heading.innerText = editInput.value
                todoListHeader.innerText = editInput.value
            }
            localStorage.setItem('categories', JSON.stringify(storage))
            selectedItem.classList.remove('editting')
            selectedItem.classList.add('active')
            tabItem.classList.remove('disabled')
        }

        // Edit click
        selectedItem.classList.add('editting')
        editInput.value = heading.innerText
        editInput.focus()
        editInput.select()

        // Input blured
        editInput.onblur = () => saveInfo()
        // Enter pressed
        editInput.onkeypress = (e) => {
            const key = e.code || e.key
            if (key === 'Enter') {
                saveInfo()
            }
        }
    },
    removeGroup(index) {
        const storage = this.getStorage('categories')
        const worksList = $('.works-list')
        const tabItem = $('.todo-list .todo-list__nav')
        storage.splice(index, 1)
        localStorage.setItem('categories', JSON.stringify(storage))
        worksList.innerHTML =
            `<div class="no-item">
                <p>Please choose a group on the left column !</p>
                <img src="/img/pic-logo.png" alt="">
            </div>`
        this.renderGroup()
        this.renderList()
        tabItem.classList.add('disabled')
    },
    createGroup() {
        const storage = this.getStorage('categories')
        const groupIndex = storage.length
        storage.push({
            name: storage.length === 0 ? `New Group` : `New Group ${groupIndex}`,
            inProgressTasks: [],
            doneTasks: [],
            failTasks: []
        })
        localStorage.setItem('categories', JSON.stringify(storage))
        this.renderGroup()
        this.renderList(groupIndex)
        this.editGroup(groupIndex)
        this.disableButton('.todo-list .todo-remove-all')
    },
    removeAll(element, groupIndex) {
        const modalBox = $('.modal-box')
        const removeAllModal =
            `<div class="modal remove-all-modal">
                <div class="modal__container">
                    <div class="content">
                        <img class="modal__image" src="/img/pic-logo.png" alt="">
                        <div class="modal__text">
                            <h3>Are you sure to remove all items ?</h3>
                            <p>They will be permanently removed</p>
                        </div>
                    </div>
                    <div class="image">
                        <img src="/img/img1.png" alt="">
                    </div>
                    <div class="modal__button">
                        <button class="cancel btn btn-remove">Cancel</button>
                        <button class="confirm btn btn-remove">Confirm</button>
                    </div>
                </div>
            </div>`
        modalBox.innerHTML = removeAllModal
        const modal = $('.remove-all-modal')
        const modalContainer = $('.remove-all-modal .modal__container')
        const cancelBtn = $('.modal__button .cancel')
        const confirmBtn = $('.modal__button .confirm')
        modal.onclick = () => {
            modalBox.innerHTML = ''
        }
        modalContainer.onclick = (e) => {
            e.stopPropagation()
        }
        cancelBtn.onclick = () => {
            modalBox.innerHTML = ''
        }
        confirmBtn.onclick = () => {
            const tabItem = $('.todo-list .todo-list__nav')
            localStorage.setItem('categories', element)
            modalBox.innerHTML = ''
            this.renderGroup()
            this.renderList(groupIndex)

            // Disable tab
            tabItem.classList.add('disabled')
        }
    },
    renderGroup() {
        const todoGroup = this.getStorage('categories')
        const todoView = $('.todo-view')
        let htmls = todoGroup.map((item, index) => {
            return `
                <div class="todo__item btn btn-no-condition" data-index="${index}">
                    <div class="text">
                        <div class="text__header">
                            <input class="edit-input" type="text" placeholder="${index === 0 ? `New Group` : `New Group ${index}`}">  
                            <h3>${item.name}</h3>
                        </div>
                        <p>${item.inProgressTasks.length + item.failTasks.length + item.doneTasks.length} tasks</p>
                    </div>
                    <div class="button">
                        <button class="edit btn btn-add-edit"><i class="fas fa-pen"></i></button>
                        <button class="remove btn btn-remove"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `
        })
        if (htmls.length !== 0) {
            todoView.innerHTML = htmls.join('')
            this.enableButton('.todo-group .todo-remove-all')
        }
        else {
            todoView.innerHTML =
                `<div class="no-item">
                    <p>You haven't had any group yet !</p>
                    <img src="/img/pic-logo.png" alt="">
                </div>`
            this.disableButton('.todo-group .todo-remove-all')
        }
    },
    renderList(index, tabIndex = 0) {
        const todoListHeader = $('.todo-list__header')
        const todoListSubheader = $('.todo-list__subheader')
        const worksList = $('.works-list')
        const tasksTab = this.getTabNameByIndex(tabIndex)
        if (index === undefined) {
            todoListHeader.innerText = '"Heading"'
            todoListSubheader.innerText = '"Numbers of tasks"'
            worksList.innerHTML =
                `<div class="no-item">
                <p>Please choose a group on the left column !</p>
                <img src="/img/pic-logo.png" alt="">
            </div>`
            this.disableButton('.todo-list .todo-remove-all')
            this.disableButton('.todo-list .todo-add')
        }
        else {
            const list = this.getStorage('categories')[index][tasksTab]
            const htmlsBody = list.map((item, index) => {
                return `
                <div class="item btn btn-no-condition ${list[index].status == 'done' ? 'done' : list[index].status == 'fail' ? 'fail' : ''}" data-index="${index}">
                    <div class="text">
                        <h3>${item.heading}</h3>
                        <p>${item.startTime + ' - ' + item.endTime}</p>
                    </div>
                    <i class="fas fa-pen detail btn ${tabIndex == '0' ? 'btn-add-edit' : tabIndex == '1' ? 'btn-done' : 'btn-fail'}"></i>
                </div>
                `
            })
            todoListHeader.innerText = this.getStorage('categories')[index].name
            todoListSubheader.innerText = list.length + ` ${tabIndex == 0 ? 'Inprogress' : tabIndex == 1 ? 'Resolved' : 'Failed'} Tasks`
            worksList.innerHTML = htmlsBody.join('')
            this.enableButton('.todo-list .todo-add')
            this.enableButton('.todo-list .todo-remove-all')
            if (list.length === 0) {
                worksList.innerHTML =
                    `<div class="no-item">
                        <p>You haven't had any task in that tab !</p>
                        <img src="/img/pic-logo.png" alt="">
                    </div>`
                this.disableButton('.todo-list .todo-remove-all')
            }
            this.handleTask(index, tabIndex)
        }
    },
    render() {
        this.renderGroup()
        this.renderList()
    },
    start() {
        notification.start()
        this.render()
        this.handleGroup()
    }
}

app.start()