import notification  from "./notification.js"

window.onload = () => {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const sliderImage = $('.introduction__slider .image');
    const sliderImageItems = $$('.introduction__slider .image img')
    const sliderImageWidth = sliderImage.offsetWidth
    const prevBtn = $('.introduction__slider .prev')
    const nextBtn = $('.introduction__slider .next')
    const navContainer = $('.slider-nav')
    const navs = $$('.slider-nav .bar')
    let positionX = 0
    let index = 0
    const maxPosition = sliderImageWidth * (sliderImageItems.length - 1)
    const handlPrevNext = (dir) => {
        for (let i = 0; i < navs.length; i++) {
            navs[i].classList.remove('active')
        }
        if (dir === 'next') {
            index++
            if (index >= sliderImageItems.length) {
                positionX = 0
                index = 0
                sliderImage.style.transform = `translateX(${positionX})`
            }
            else {
                positionX = positionX - sliderImageWidth
                sliderImage.style.transform = `translateX(${positionX}px)`
            }
            navs[index].classList.add('active')
        }
        else if (dir === 'prev') {
            index--
            if (index < 0) {
                positionX = -maxPosition
                index = sliderImageItems.length - 1
                sliderImage.style.transform = `translateX(${positionX}px)`
            }
            else {
                positionX = positionX + sliderImageWidth
                sliderImage.style.transform = `translateX(${positionX}px)`
            }
            navs[index].classList.add('active')
        }
    }
    prevBtn.onclick = () => {
        handlPrevNext('prev')
    }
    nextBtn.onclick = () => {
        handlPrevNext('next')
    }

    navContainer.onclick = (e) => {
        const selectedItem = e.target.closest('.bar')
        const selectedItemIndex = selectedItem.dataset.index
        if (selectedItem) {
            for (let i = 0; i < navs.length; i++) {
                navs[i].classList.remove('active')
            }
            selectedItem.classList.add('active')
        }
        positionX = -(selectedItemIndex * sliderImageWidth)
        index = selectedItemIndex
        sliderImage.style.transform = `translateX(${positionX}px)`
    }
    
    setInterval(() => {
        handlPrevNext('next')
    }, 5000);

    notification.start()
}



        