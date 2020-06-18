// Write a function that takes an input parameter, 'str', and returns a new string with the vowels removed. Any special characters such as !@#$%^&*() should be left intact.

// loseTheVowels("this is a test sentence");
// loseTheVowels("coffee is a necessary way to start the day");


function loseTheVowels(str) {

  //define vowels
  let vowels = [a,e,i,o,u]
  // convert string into array
  let string = "".toLowerCase()
  let array = string.split()
  // loop through array to find vowels
  for (var i = 0; i <= array.length; i++) {

    var char = array.charAt(i);

    if (vowels.indexOf(char) == -1) {
        newStr += char;
    }
}
return newStr;

  // remove vowels from array
  //return array
  //convert into string
  //return string without vowels



// Test cases
console.log(loseTheVowels("this is a test sentence"));
console.log(loseTheVowels("coffee is a necessary way to start the day"));