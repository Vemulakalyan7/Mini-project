


function calculateLoan(){
 const LoanAmountValue=document.getElementById("Loan-amount").value
 const IntrestRateValue=document.getElementById("Interest-Rate").value
const MonthsToPayValue= document.getElementById("Months-to-pay").value

 const Intrest =(LoanAmountValue *(IntrestRateValue*0.01))/MonthsToPayValue
 const Monthlypayment= (LoanAmountValue/MonthsToPayValue+Intrest)

 document.getElementById("payment").innerHTML=`Monthly payment: ${Monthlypayment}`

    console.log(LoanAmountValue)
}
calculateLoan( )