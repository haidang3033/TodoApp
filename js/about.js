import notification  from "./notification.js"

window.onload = () => {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const sliderImage = $('.banner .image');
    const sliderImageItems = $$('.banner .image img')
    const sliderImageWidth = sliderImage.offsetWidth
    const navs = $$('.bot-layer .bar')
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
    setInterval(() => {
        handlPrevNext('next')
    }, 5000);

    const getEmailBtn = $$('.social .social-group__item')[1]
    getEmailBtn.onclick = () => {
        navigator.clipboard.writeText('nguyenbahoangminh06@gmail.com');
        alert('My email address has been already copied to your clipboard !')
    }

    notification.start()
}