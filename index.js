function isPalindrome(word) {
  let flipped = "";
  let i = word.length-1;

  for(i;i>=0;i--){
   flipped+=word[i];
  }
    console.log(word);
    console.log(flipped);
   
    return(word===flipped);

  }


/* 
  init empty string called flipped
  init iterator variable to one less than word length

  iterate over each character in word in reverse order
      add character to flipped variable
  
  compare word to flipped
  return boolean value
    
 

*/

/*
  
  The solution is to iterate over the word in reverse order
  using a for loop since there is no inbulit function to 
  reverse string order like there is for arrays.

  Add the character to a new string varaible. Once iteration
  is done compare to the original and return the value of the
  comparison.

*/

// You can run `node index.js` to view these console logs
 if (require.main === module) {
    
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("");

    
  console.log("Expecting: false");
  console.log("=>", isPalindrome("absolute"));

  console.log("");

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}  

module.exports = isPalindrome;  


