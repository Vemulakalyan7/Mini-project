const textareaEl= document.getElementById("textarea")
const totalCounterEl=document.getElementById("total-counter")
const RemainingCounterEl=document.getElementById("Remaining-counter")

textareaEl.addEventListener('keyup',()=>{
    
    updatedCounter()
})

function updatedCounter(){
    totalCounterEl.innerText=textareaEl.value.length
    RemainingCounterEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length
}