const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const songs = [
    {
        name: 'Bước qua nhau',
        author: 'Vũ',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - BƯỚC QUA NHAU  Vũ Official MV.mp3',
    },
    {
        name: 'Bước qua mùa cô đơn',
        author: 'Vũ',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - BƯỚC QUA MÙA CÔ ĐƠN  Vũ Official MV.mp3',
    },
    {
        name: 'Đợi',
        author: 'Vũ',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - ĐỢI  VŨ ORIGINAL.mp3',
    },
    {
        name: 'Mùa hè của em',
        author: 'Vũ',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Vũ  Mùa Hè Của Em  OFFICIAL MV.mp3',
    },
    {
        name: 'Đông kiếm em',
        author: 'Vũ',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - ĐÔNG KIẾM EM  Vũ Original.mp3',
    },
    {
        name: 'Hành tinh song song',
        author: 'Vũ',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Hành tinh song song  Vũ Official Audio.mp3',
    },
    {
        name: 'Lối nhỏ',
        author: 'Đen Vâu',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen  Lối Nhỏ ft Phương Anh Đào MV.mp3',
    },
    {
        name: 'Trốn tìm',
        author: 'Đen Vâu',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen  Trốn Tìm ft MTV band MV.mp3',
    },
    {
        name: 'Một triệu like',
        author: 'Đen Vâu',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen  một triệu like ft Thành Đồng MV.mp3',
    },
    {
        name: 'Đi về nhà',
        author: 'Đen Vâu ft JustaTee',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen x JustaTee  Đi Về Nhà MV.mp3',
    },
    {
        name: 'Bài này chill phết',
        author: 'Đen Vâu ft MIN',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen ft MIN  Bài Này Chill Phết MV.mp3',
    },
    {
        name: 'Mười năm',
        author: 'Đen Vâu ft Ngọc Linh',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen  Mười Năm ft Ngọc Linh MV Lộn Xộn 3.mp3',
    },
    {
        name: 'Cảm ơn',
        author: 'Đen Vâu ft Biên',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen  Cảm ơn ft Biên MV.mp3',
    },
    {
        name: '2 triệu năm',
        author: 'Đen Vâu',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đen  hai triệu năm ft Biên mv.mp3',
    },
    {
        name: 'Đường tôi chở em về',
        author: 'buitruonglinh',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Đường Tôi Chở Em Về  buitruonglinh  Lyrics Video .mp3',
    },
    {
        name: '3107',
        author: 'Duongg x Nâu x W/n',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - 3107  Wn  Official Video  ft Nâu Duongg.mp3',
    },
    {
        name: '3107 - 2',
        author: 'Duongg x Nâu x W/n x Freak D',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - 31072  DuongG x NAU x WN  OFFICIAL MV.mp3',
    },
    {
        name: '3107 - 3',
        author: 'W/n ft. Nâu, Duongg, Titie',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - 3107 3  Wn  ft  NâuDuonggTitie  OFFICIAL MV.mp3',
    },
    {
        name: 'Phố đã lên đèn',
        author: 'Huyền Tâm Môn',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - HUYỀN TÂM MÔN  PHỐ ĐÃ LÊN ĐÈN  OFFICIAL AUDIO.mp3',
    },
    {
        name: 'Nàng thơ',
        author: 'Hoàng Dũng',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - Nàng Thơ  Hoàng Dũng  Official MV.mp3',
    },
    {
        name: 'Trời giấu trời mang đi',
        author: 'Amee x Viruss',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - AMEE x VIRUSS  TRỜI GIẤU TRỜI MANG ĐI  Official Music Video.mp3',
    },
    {
        name: 'Sao anh chưa về nhà',
        author: 'Amee x Ricky Star',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - AMEE  SAO ANH CHƯA VỀ NHÀ ft RICKY STAR  Official Music Video.mp3',
    },
    {
        name: 'Từ thích thích thành thương thương',
        author: 'Amee x Hoàng Dũng',
        thumb: '/img/thumbnail/thumb.png',
        songSrc: '/audio/y2mate.com - từ thích thích thành thương thương  AMEE  Hoàng Dũng  official lyric video.mp3',
    },
]

const musicPlayer = {
    isPlay: false,
    isRepeat: false,
    isRandom: false,
    currentIndex: 0,
    getStorage(name) {
        if (name === 'songs') {
            if (localStorage.getItem(name) === null) {
                localStorage.setItem(name, JSON.stringify(songs))
            }
            return JSON.parse(localStorage.getItem(name))
        }
    },
    renderSong(index = 0) {
        const songStorage = this.getStorage('songs')
        const playList = $('.playlist')
        const dashboardName = $('.dashboard__name')
        const dashboardThumb = $('.dashboard__cd img')
        const audio = $('.task-list__music audio')
        const htmlsPlaylist = songStorage.map((song, index) =>
            `<div class="song ${index == 0 ? 'active' : ''}" data-index="${index}">
                <div class="song__info">
                    <div class="song__name">${song.name}</div>
                    <div class="song__author">${song.author}</div>
                </div>
            </div>`
        )

        // Audio rendering
        audio.src = songStorage[index].songSrc

        // Dashboard rendering
        dashboardName.innerText = songStorage[index].name
        dashboardThumb.src = songStorage[index].thumb
        
        // Playlist rendering
        playList.innerHTML = htmlsPlaylist.join('')

        // Render active item
        const songs = $$('.playlist .song')
        for (let i = 0; i < songs.length; i++) {
            songs[i].classList.remove('active')
        }
        songs[index].classList.add('active')
    },
    handleSong() {
        const taskListMusic = $('.task-list__music')
        const dashboard = $('.dashboard')
        const cdThumb = $('.dashboard__cd img')
        const timeline = $('.dashboard__timeline .timeline')
        const currentTimeText = $('.dashboard__timeline .current-time')
        const maxTime = $('.dashboard__timeline .max-time')
        const playBtn = $('.dashboard__buttons .play-pause')
        const nextBtn = $('.dashboard__buttons .next')
        const prevBtn = $('.dashboard__buttons .prev')
        const repeatBtn = $('.dashboard__buttons .repeat')
        const randomBtn = $('.dashboard__buttons .random')
        const playlist = $('.playlist')
        const audio = $('.task-list__music audio')
        const cdThumbWidth = cdThumb.offsetWidth

        // Init rotated thumbnail
        const thumbRotate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        thumbRotate.pause()

        // Scroll the playlist
        taskListMusic.onscroll = () => {
            const scrollTop = taskListMusic.scrollTop
            const newThumbWidth = cdThumbWidth - scrollTop

            cdThumb.style.width = newThumbWidth < 0 ? 0 : newThumbWidth + 'px'
            cdThumb.style.opacity = newThumbWidth / cdThumbWidth
        }

        // Play/pause song
        playBtn.onclick = () => {
            if (this.isPlay) {
                audio.pause()
                thumbRotate.pause()
                dashboard.classList.remove('play')
                this.isPlay = false
            }
            else {
                audio.play()
                thumbRotate.play()
                dashboard.classList.add('play')
                this.isPlay = true
            }
        }

        // Run the timeline
        audio.ontimeupdate = () => {
            if (audio.duration) {
                timeline.value = (audio.currentTime / audio.duration) * 100

                // Render current time 
                currentTimeText.innerText =
                    Math.floor(audio.currentTime / 60) +
                    ':' +
                    (Math.floor(audio.currentTime % 60) < 10 ? '0' +
                        Math.floor(audio.currentTime % 60) : Math.floor(audio.currentTime % 60))

                // Render max time 
                maxTime.innerText =
                    Math.floor(audio.duration / 60) +
                    ':' +
                    (Math.floor(audio.duration % 60) < 10 ? '0' +
                        Math.floor(audio.duration % 60) : Math.floor(audio.duration % 60))
            }
        }

        // Seek song
        timeline.oninput = () => {
            audio.currentTime = (timeline.value * audio.duration) / 100
            this.playSong()
            thumbRotate.play()
        }

        // When the song end 
        audio.onended = () => {
            if (this.isRandom && this.isRepeat == false) {
                this.randomSong()
            }
            if (this.isRandom == false && this.isRepeat) {
                this.playSong()
            }
            if (this.isRandom == false && this.isRepeat == false) {
                this.currentIndex = this.currentIndex + 1

                this.renderSong(this.currentIndex)
                this.playSong()
            }
        }

        // Next / prev song
        nextBtn.onclick = () => {
            if (this.isRandom) {
                this.randomSong()
            }
            else {
                this.nextSong()
            }
            this.playSong()
            thumbRotate.play()
        }
        prevBtn.onclick = () => {
            if (this.isRandom) {
                this.randomSong()
            }
            else {
                this.prevSong()
            }
            this.playSong()
            thumbRotate.play()
        }

        // Repeat / random song
        repeatBtn.onclick = () => {
            repeatBtn.classList.toggle('active')
            this.isRepeat = !this.isRepeat
            this.isRandom = false

            randomBtn.classList.remove('active')
        }
        randomBtn.onclick = () => {
            randomBtn.classList.toggle('active')
            this.isRandom = !this.isRandom
            this.isRepeat = false

            repeatBtn.classList.remove('active')
        }

        // Choose a song
        playlist.onclick = (e) => {
            const selectedItem = e.target.closest('.song:not(.active)')
            if (selectedItem) {
                this.currentIndex = selectedItem.dataset.index
                thumbRotate.play()

                this.renderSong(this.currentIndex)
                this.playSong()
            }
        }
    },
    playSong() {
        const audio = $('.task-list__music audio')
        const dashboard = $('.dashboard')

        this.isPlay = true
        dashboard.classList.add('play')
        audio.play()
    },
    randomSong() {
        const arrayLength = --this.getStorage('songs').length
        const newIndex = Math.floor(Math.random() * arrayLength)

        this.renderSong(newIndex)
        this.playSong()
    },
    nextSong() {
        ++this.currentIndex
        if (this.currentIndex >= this.getStorage('songs').length) {
            this.currentIndex = 0
        }
        
        this.renderSong(this.currentIndex)
    },
    prevSong() {
        --this.currentIndex
        if (this.currentIndex < 0) {
            this.currentIndex = this.getStorage('songs').length - 1
        }
        
        this.renderSong(this.currentIndex)
    },
    start() {
        this.renderSong()
        this.handleSong()
    }
}

export default musicPlayer