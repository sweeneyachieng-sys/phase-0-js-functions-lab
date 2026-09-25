 
function calculateTax (amount) {
  let tax=( amount * 0.1 )
  return tax 
}
let amoount = 100
console.log(calculateTax(100 * 0.1))
//  ...................working perfectly


// function 2
function convertToUppercase(text){ 
    return text.toUpperCase();
}
const text = "text";
console.log(convertToUppercase(text))
   
// endfunction working perfectly

//f3

function findMaximum( num1, num2){
    if (num1 > num2){
    return num1;
}else{
    return num2;
}
}
console.log(findMaximum(10, 20))
// working perfectly 

//f4
function isPalindrome(word){
     let reversed = word.split('').reverse().join('');
if (word === reversed){
return true;
}else{
return false;
}
}
let word = "noon"
console.log(isPalindrome(word))
//  working

//f5
function calculateDiscountedPrice(originalPrice, discountpercentage){
let discountAmount =(originalPrice* discountpercentage)/100;
let finalAmount = originalPrice - discountAmount;
return finalAmount;
}
console.log(calculateDiscountedPrice(100,20));
// end working perfectly