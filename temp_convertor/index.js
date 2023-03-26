const CelsiusEl=document.getElementById("Celsius")
const KelvinEl=document.getElementById("Kelvin")
const FahrenheitEL=document.getElementById("Fahrenheit")


function computeTemp(event){
  const  currentValue= +event.target.value

    switch (event.target.name){
        case "Celsius":
        KelvinEl.value=(currentValue+273.32).toFixed(2)
        FahrenheitEL.value=(currentValue*1.8+32).toFixed(2)
        break;
        case "Fahrenheit":
            CelsiusEl.value=((currentValue-32 )/1.8).toFixed(2)
            KelvinEl.value=((currentValue-32)/1.8+273.32).toFixed(2)
            break;
        case "Kelvin":
            CelsiusEl.value=(currentValue-273.32).toFixed(2)
            FahrenheitEL.value=((currentValue-273.32)*1.8+32).toFixed(2)
            break;
            default:
                break;

    }
}
computeTemp()