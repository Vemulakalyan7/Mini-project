const input=document.getElementById("input-text")
const list=document.getElementById("list-container")

function addTask(){
    if(input.value===""){
        alert("you must write something")
    }else{
        let liEl=document.createElement("li")
        liEl.innerHTML=input.value
        list.appendChild(liEl)
        let spanEl=document.createElement("span")
        spanEl.innerHTML="\u00d7"
        liEl.appendChild(spanEl)
    }
    input.value=""
    saveData()
}
list.addEventListener("click",(e)=>{
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    saveData()
   }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove()
    saveData()

   }
})

function saveData(){
    localStorage.setItem("data",list.innerHTML  )
}
function showTask(){
    list.innerHTML=localStorage.getItem("data")
}
showTask()