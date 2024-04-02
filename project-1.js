




const openbtnEl = document.querySelector(".open")
const modalContainerEl = document.querySelector(".modal-container")
const closebtnEl = document.querySelector(".modal-btn")



openbtnEl.addEventListener("click", ()=>{
    modalContainerEl.classList.add("show")
})
closebtnEl.addEventListener("click", ()=>{
    modalContainerEl.classList.remove("show")
})