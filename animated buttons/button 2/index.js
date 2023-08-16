let bodyElement = document.body;

let btn = document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        let moveX = e.pageX - btn.offsetLeft;
        let moveY = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", moveX + "px")
        btn.style.setProperty("--y", moveY + "px")
    })
    btn.addEventListener("mouseout", () => {
        btn.style.transform = ""
    })
    btn.addEventListener("click", () =>{
        let computedStyles = getComputedStyle(btn)
        let getButtonColor = computedStyles.getPropertyValue("--clr_bg")
        bodyElement.style.backgroundColor = getButtonColor
    })
})