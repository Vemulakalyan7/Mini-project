const btnEl=document.getElementById("btn")
const bmiInputEl=document.getElementById("BMI-result")
const weightConditionEl=document.getElementById("Weight-condition")



function calculateBMI(){
    

    const heightValue=document.getElementById("Height").value/100
const weightValue=document.getElementById("Weight").value


const BmiValue=(weightValue/(heightValue*heightValue))
 bmiInputEl.value=BmiValue


 if(BmiValue<18.5){
    weightConditionEl.innerText="Under Weight"
 }else if(BmiValue>=18.5 && BmiValue<=24.9){
        weightConditionEl.innerText="Normal weight"

    }else if(BmiValue>=25.0 && BmiValue<=29.9){
        weightConditionEl.innerText="Over Weight"

    }else{
        weightConditionEl.innerText="Obesity"

    }
 }




btnEl.addEventListener('click',calculateBMI)