const sliderImg = document.querySelectorAll(".slider-img");
sliderImg.forEach((ele, index) => {
    ele.style.left = `${100 * index}%`
});
let current = 0
function right() {
    current--
    if (current !== -sliderImg.length) {
        setImgPosition(current)
    } else {
        current = 0
        setImgPosition(current)
    }
}
function left() {
    if (current !== 0) {
        current++
        setImgPosition(current)
    }
}

function setImgPosition(current) {
    sliderImg.forEach((ele, index) => {
        ele.style.transform = `translateX(${current * 100}%)`
    })
}
setInterval(right, 5100)