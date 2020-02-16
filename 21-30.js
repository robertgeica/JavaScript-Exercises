// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string. 
function e21(string) {
    let result;

    string.substring(0, 2) === 'py' ? result = string : result =  "py" + string;
    console.log(result);
}
e21('thon');

// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string. 
function e22(string, removeCharAt) {
    let removeChar = (text, char_pos) => {
        part1 = text.substring(0, char_pos);
        part2 = text.substring(char_pos + 1, text.length);
        return (part1 + part2);
    }

    let result = (removeChar(string, parseInt(removeCharAt, 10)));
    console.log(result);
    
}
e22('javascript', 2);

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1. 
function e23(string) {
    let firstChar = string.slice(0, 1);
    let lastChar = string.slice(string.length - 1);
    let firstAndLastChar = string.slice(1, string.length -1);

    let result = lastChar + firstAndLastChar + firstChar;
    console.log(result);
}
e23('java');

// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back. 
function e24(string) {
    let firstChar = string.slice(0, 1);

    let result = firstChar + string + firstChar;
    console.log(result);
}
e24('javascript');


// 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
function e25(num) {

    if (num % 3 == 0 && num % 7 == 0) {
        result = num + " is a multiple of 3 and 7"

    } else {
        if (num % 3 == 0) {
            result = num + " is a multiple of 3"
        } 
        else if (num % 7 == 0) {
            result = num + " is a multiple of 7"
        } else {

            result = num + " is not a multiple of 3 or 7"
        }
    }
    console.log(result);
}
e25(10);

// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. 
function e26(string) {

    if (string.length >= 3) {
        let lastThreeChars = string.substring(string.length, string.length - 3);
        result = lastThreeChars + string + lastThreeChars;
    } else {
        result = "Enter a string of minimum 3 letters."
    }
    console.log(result);
}
e26('asd');

// 27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
function e27(string) {
    let startsJava = string.slice(0, 4);

    if (startsJava === "java") {
        result = startsJava;

    } else {
        result = "Your string doesn't start with 'java' ";
    }
    console.log(result);
}
e27('javascript');

// 28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function e28(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        result = "true";
    } else {
        result = "false";
    }
    console.log(result);
}
e28(50, 52);

// 29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
function e29(n1, n2, n3) {
    if ((n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99)) {
        result = "true";
    } else {
        result = "false";
    }
    console.log(result);

}
e29(51, 52, 53);

// 30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
function e30(string) {
    if (string.length < 6) {
        return string;
    }

    result = string;

    if (string.substring(10, 4) == 'Script') {
        result= string.substring(0, 4) + string.substring(10, string.length);
    }
    console.log(result);
    
}
e30('JavaScript');