# Palindrome Application

Basic Palindrome application that determines if a word reads the same forward and backwards.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Learnings](#learnings)
- [Challenges Faced](#challenges-faced)
- [Installation and Usage](#installation-and-usage)
- [Screenshots](#screenshots)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Project Overview

A Palindrome app is a simple program that checks whether a given input (usually a word, phrase, or sequence of characters) is a palindrome or not. A palindrome is a word, phrase, or number that reads the same forwards and backwards, disregarding spaces, punctuation, and capitalization.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features

- User Input.
- Check Button.
- Palindrome Check Logic.
- Feedback and Alerts.
- User-Friendly Interface.

## Learnings

During this project, I gained a deeper understanding for Algorithmic thinking and much more

- DOM manipulation, functions and event listeners.
- Creating and updating HTML elements dynamically.
- String Manipulation. Using different methods(`.substring()`,`.toLowerCase()`,`Math.floor()`,`.join()`,`.reverse()`)
- Incremental Complexity.

## Challenges Faced

I encountered many challenges during this project, algorithmic thinking being the most significant. I didn't have a strong concept on working with palindrome let alone the algorithmic approach I needed to take for establishing if an input value passed for a palindrome. I also had to brush up on Methods like .reverse(),`.reverse()`, `.join()`, `.substring()`, and `toLowerCase()` in-order to get a better understand of the String Manipulation that needed to be implemented. It was a huge since of accomplishment once the application ran successfully, but this project also showed me the areas (logic/methods) I need to work on moving forward.

```
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



```

## Installation and Usage

1. Clone this repository: `git clone https://github.com/josephc1417/Palindrome-Checker.git`
2. Open `index.html` in your web browser.
3. Start adding and managing your tasks!

## Screenshots

![Screenshot 1](./Screenshot%202023-08-11%20182336.png)
![Screenshot 2](./Screenshot%202023-08-11%20182552.png)
![Screenshot 3](./Screenshot%202023-08-11%20182252.png)

## Acknowledgments

I want to thank `Udemy-100 days of JavaScript` for their tutorial on DOM manipulation, which helped me understand the core concepts.
Special thanks to `Ewomazino Akpareva` for providing feedback and suggestions during the development process.

## Contact

Feel free to reach out to me on LinkedIn for any questions or feedback.
