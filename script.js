const submitBtn = document.querySelector(".p-mai")
const successBox = document.querySelector(".a-scss")
const mainCon = document.querySelector(".a-main")


mainCon.addEventListener("click", (e)=>{
    if(!successBox.contains(e.target) || !submitBtn.contains(e.target) ){
        successBox.classList.remove("a-scss-shw")
}})


submitBtn.addEventListener("click",(e)=>{
    successBox.classList.add("a-scss-shw")
    e.stopPropagation()
    })
    