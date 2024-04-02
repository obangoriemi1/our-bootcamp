
const sideMenu = document.getElementById("sidemenu")

function openBtn(){
  sideMenu.style.right = "0"
}
function closeBtn(){
    sideMenu.style.right = "-150px"
}



const ShowField = document.querySelector(".field")


function show(){
  ShowField.style.opacity = "1"
}


function formShow(){
  ShowField.style.opacity = "0"
  setTimeout(() =>{
   formShow()
  }, 15000)
}
formShow()