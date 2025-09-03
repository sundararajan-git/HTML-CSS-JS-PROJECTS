// dom elements
const rightBtn = document.getElementById("rightBtn")
const leftBtn = document.getElementById("leftBtn")
const imageEle = document.getElementById("sliderImg")

// vars
const bg = ['https://wallpapers.com/images/file/4k-hulk-neon-green-xokijypnnpb09e9e.jpg', 'https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg', 'https://wallpapers.com/images/file/avengers-endgame-be3i5shp129k8bd3.jpg', 'https://wallpapers.com/images/featured-full/doctor-strange-6es4yutxrbl0nas9.jpg', 'https://wallpapers.com/images/featured-full/marvel-superheroes-w5u75zr2f1b139b7.jpg']


rightBtn.addEventListener('click', () => {
    const index = bg.findIndex((u) => u === imageEle.src)
    imageEle.src = bg[index + 1] ? bg[index + 1] : bg[0]
})


leftBtn.addEventListener('click', () => {
    const index = bg.findIndex((u) => u === imageEle.src)
    imageEle.src = bg[index - 1] ? bg[index - 1] : bg[bg.length - 1]
})
