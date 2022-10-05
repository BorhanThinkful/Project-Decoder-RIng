// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function (){
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
     if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) return false;
    
    if (encode === false) shift = shift - (shift * 2);//decoding

    let conversion = input.toLowerCase();  //converting to lowercase
    let newCode = [...conversion].map((i) => {
      let convCode = i.charCodeAt(); //getting all corresponsing unicode for the letters
     
      if (convCode < 97 || convCode > 122) return                         String.fromCharCode(convCode);
     
      let newNum = convCode + shift;  
      if (newNum < 97) newNum += 26;
      if (newNum > 122) newNum -= 26; 


      return String.fromCharCode(newNum); 
    });
    return newCode.join("");
  };
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
