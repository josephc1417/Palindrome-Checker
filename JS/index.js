//button 
const checkWordBtn = document.querySelector(".btn");
const checkResult = document.querySelector(".result");

checkWordBtn.addEventListener('click', palindrome);

1. // find the length of the word 
   // if the length of the word is odd then ..
   // if the length oif the word is even then ..
    // use the substring method()
function palindrome() {
    const inputWord = document.querySelector(".input-text").value;
    let length = inputWord.length;
     
    //first two letters
    let start = inputWord.substring (0, Math.floor(length / 2)).toLowerCase();
    // alert(start);
    
    //last two letters 
    let end = inputWord.substring (length - Math.floor(length / 2)).toLowerCase();
    // alert(end);

    //flip the last two letters and then compare
    let flip = [...end].reverse().join("");
    // alert(flip)

    //conditional
    if (start == flip) {
        checkResult.innerHTML = `${inputWord.toUpperCase()} is a palindrome!`
    } else {
        checkResult.innerHTML = `${inputWord.toUpperCase()} is a NOT a palindrome :(`;
    }


}