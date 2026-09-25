 function calculateTax (amount) {
  return amount * 0.1;
}
//  ...................working perfectly


// function 2
function convertToUppercase(text){ 
    return text.toUpperCase();
}

   
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
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

let word = "noon"
console.log(isPalindrome(word))
//  working

//f5
function calculateDiscountedPrice(originalPrice, discountpercentage){
return originalPrice -(originalPrice*(discountpercentage/100));
}
console.log(calculateDiscountedPrice(100,20));
// end working perfectly


module.exports = { calculateTax, convertToUppercase, findMaximum, isPalindrome, calculateDiscountedPrice };