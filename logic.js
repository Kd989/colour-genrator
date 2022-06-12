const mainbtn = document.querySelector("button")
const body = document.body
const current = document.querySelector(".current-colour");
function randomgenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const random = `rgb(${red},${green},${blue})`
    return random
}
mainbtn.addEventListener("click",()=>{
    const randomcolour = randomgenerator()
    body.style.backgroundColor = randomcolour;
    current.textContent = randomcolour

})