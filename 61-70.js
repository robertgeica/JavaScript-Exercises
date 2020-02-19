// 61. Write a JavaScript program to concatenate two strings except their first character.
function e61(str1, str2) {
    str1 = str1.substr(1);
    str2 = str2.substr(1);
    let str3 = str1 + str2;
    console.log(str3);
}
// e61('hi', 'hello');

// 62. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three. 
function e62(str) {
    if(str.length > 3) {
        str = str.slice(-3) + str.slice(0, -3);
    }
    console.log(str);
}
// e62('hello');

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three. 
function e63(str) {
    if(str.length > 3) {
        if(str.length % 2 !== 0) {
            let middleChars = (str.length + 1) / 2;
            str = str.slice(middleChars - 2, middleChars + 1);
            console.log(str)
        } else {
            console.log('even')
        }
    }
}
// e63('abcdefg');

// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
function e64(str1, str2) {
    let str3;
    let charsToDelete;

    function concatenate(str1, str2) {
        if(str1.length == str2.length) {
            str3 = str1+str2;
            console.log(str3);
        }
    }

    if(str1.length > str2.length) {
        charsToDelete = str1.length - str2.length;
        str1 = str1.slice(charsToDelete);
        concatenate(str1, str2);
    } else if(str2.length > str1.length) {
        charsToDelete = str2.length - str1.length;
        str2 = str2.slice(charsToDelete);
        concatenate(str1, str2);
    }
    
}
// e64('html', 'css');

// 65. Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6. 
function e65(str) {
    if(str.length > 6) {
        str = str.slice(str.length - 6);
        if(str == 'Script') {
            console.log('ok')
        }
    }
}
// e65('JavaScript');

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function e66(str) {
    let cityName = str.substr(0, 3);

    if(cityName == 'Los' || cityName == 'New') {
        console.log(str);
    }
}
// e66('Los Santos');


// 67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
function e67(str) {
    let firstChar = str.substr(0, 1);
    let lastChar = str.substr(str.length -1);
    let newString = str;

    if(firstChar == 'P') {
        newString = newString.substr(1);
    }
    if(lastChar == 'P') {
        newString = newString.substr(0, newString.length - 1);
    }
    console.log(newString)   
}
// e67('PARAP');

// 68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n. 
function e68(str, n) {
    if(str.length >= n) {
        str = str.substr(n);
        str = str.substr(0, str.length -n);
        console.log(str);
    }

}
// e68('programming', 2);

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. 
function e69(arr) {
    let sum = arr[0] + arr[1] + arr[2];
    console.log(sum);
}
// e69([10, 15, 20]);

// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3. 
function e70(arr) {
    let rotate = [arr[1], arr[2], arr[0]];
    console.log(rotate);
}
e70([1, 2, 3]);