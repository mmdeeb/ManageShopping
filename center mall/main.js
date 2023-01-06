let button=document.querySelector("button")
let container=document.getElementById("container")
let input=document.querySelector("input")
let form=document.querySelector("form")
form.addEventListener("submit",(eo) => {
    eo.preventDefault()
    const task=`  <div class="task ">
    <span class="icon-star icon"></span>
    <p> ${input.value} </p>
   <div>
     <span class="icon-trash icon"></span>
  
     <span class="icon-angry2 icon"></span>
   </div>
    `
    

    container.innerHTML+=task
    
})
container.addEventListener("click",(eo) => {
  if(eo.target.className=="icon-trash icon")
  eo.target.parentElement.parentElement.remove()
})
container.addEventListener("click" ,(eo) => {
  if(eo.target.className=="icon-angry2 icon")
  eo.target.className="icon-heart"
})
