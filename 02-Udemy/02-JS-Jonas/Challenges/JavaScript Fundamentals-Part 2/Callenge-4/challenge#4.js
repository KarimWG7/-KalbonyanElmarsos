////////////////////////
// CHALLENGE#4
////////////////////////


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, ]
const tips=[]
const total=[]
const calcTip = function(billValue){
  if (billValue >=50 && billValue <= 300) {
    return billValue * 0.15
  }  
  else {
    return  billValue * 0.2
  }  

}  
for(let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]))
  total.push(bills[i] + tips[i])

}  
console.log(tips,total)


const clacAverage = function (arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }  
  return sum / arr.length  
}  
console.log(clacAverage(total))
