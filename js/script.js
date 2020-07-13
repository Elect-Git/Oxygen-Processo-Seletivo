let menu = document.querySelector(".main-menu")
let button = document.querySelector(".scrollToTop")

window.addEventListener("scroll", () => {
    if(this.scrollY > 100) {
        menu.classList.add("transparent-menu")
    } else {
        menu.classList.remove("transparent-menu")
    }
})

button.addEventListener("click", () => {
    window.scrollTo(0, 0)
})