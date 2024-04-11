/*=========================================== toggle style switcher ============================================ */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");

})
// Hide style switcher on scroll 
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


/*=========================================== Theme Colors ============================================ */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((styles) => {
        if(color === styles.getAttribute("title"))
        {
            styles.removeAttribute("disabled");
        }
        else
        {
            styles.setAttribute("disabled",true);
        }
    })
}

/*=========================================== Theme Light and Dark Mode ============================================ */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})