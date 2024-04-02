const sectionsEl = document.querySelectorAll("section")
const transEl = document.querySelector(".trans")
const colorsEl = ["coral", "green", "red", "blue"]

const optionEl = {
    threshold: 0.8 
};
let observer = new IntersectionObserver(navScroll, optionEl);

function navScroll(entries){
     entries.forEach(function (entry){
        const className =  entry.target.className;
        const activeLink = document.querySelector(`[data-page="${className}"]`)
        const elementIndex = entry.target.getAttribute("data-index")
        const coordinates = activeLink.getBoundingClientRect();
        const directions = {
            height: coordinates.height,
            width: coordinates.width,
            top: coordinates.top,
            left: coordinates.left,

        };
        if(entry.isIntersecting){
            transEl.style.setProperty("height", `${directions.height}px`)
            transEl.style.setProperty("width", `${directions.width}px`)
            transEl.style.setProperty("top", `${directions.top}px`)
            transEl.style.setProperty("left", `${directions.left}px`)
            transEl.style.backgroundColor = colorsEl[elementIndex]
        }
     })
}
sectionsEl.forEach(function(section){
    observer.observe(section)
})