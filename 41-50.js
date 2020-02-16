// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40. 
function e41(num1, num2, num3) {
    if (num1 == num2 && num2 == num3) {
        result = 30;
    } else if(num1 == num2 || num2 == num3 || num1==num3) {
        result = 40;
    } else {
        result = 20;
    }
    console.log(result);
}
// e41(2, 2, 2);

// 42. Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode. 
function e42(a, b, c) {
    if (b > a && c > b) {
        output = a + ' ,' + b + ', ' + c + ' are increasing in strict mode';
    } else if (c > b) {
        output = a + ' ,' + b + ', ' + c + ' are increasing in soft mode';
    } else {
        output = a + ' ,' + b + ', ' + c + ' are increasing in an undefined mode';
    }
    console.log(output);
}
// e42(1, 2, 3);

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function e43(a, b, c) {
    return (a % 10 === b % 10) ||
           (a % 10 === c % 10) ||
           (b % 10 === c % 10);
}
// console.log(e43(24, 51, 62));


// 44. Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.
function e44(a, b, c) {
    if (a >= 20 && a<b || a>=20 && a<c) {
        output = 'true';
    } else {
        output = 'false';
    }
    console.log(output);

}
// e44(20, 21, 22);

// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
function e45(a, b) {
    if(a == 15 || b == 15) {
        output = 'true';
    } else if( (a+b==15) || (a-b==15)) {
        output = 'true';
    } else {
        output = 'false';
    }
    console.log('45' + output);
}
// e45(7, 8);

// 46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11. 
function e46(a, b) {
    if (a % 7 == 0 || a % 11 == 0) {
        if(b % 7 == 0 || b % 11 == 0) {
            console.log('false')
        } else {
            console.log('true')
        }
    } else if (b % 7 == 0 || b % 11 == 0){
        if (a % 7 == 0 || a % 11 == 0) {
            console.log('false');
        } else {
            console.log('true')
        }
    }
}
// e46(14, 6);

// 47. Write a JavaScript program to check whether a given number is presents in the range 40..10000.
function e47(input) {
    if(input > 40 && input < 1000) {
        console.log('true');
    } else {
        console.log('false')
    }
}
// e47(25);

// 48. Write a JavaScript program to reverse a given string. 
function e48(string) {
    let splitString = string.split('');
    let reverseString = splitString.reverse();
    let joinStringArr = reverseString.join('');

    console.log(joinStringArr);
}
// e48('hello');


// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-49.php

function e49(str) {
    let s = str.split('');

    for (let i=0; i<s.length; i++) {
        // caesar ciphar
        switch(s[i]) {
            case ' ':
            break;

            case 'z':
            s[i] = 'a';
            break;

            case 'Z':
            s[i] = 'A';
            break;

            default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        // upper case
        switch(s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}
// console.log(e49("abC"));


// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.
function e50(string) {
    let splitted = string.split(' ');
    let capitalized;

    for(let i=0; i<splitted.length; i++) {
        capitalized = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);
        console.log(capitalized)
    }
}
// e50('hello everybody');