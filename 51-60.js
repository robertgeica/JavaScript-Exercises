// 51. Write a JavaScript program to convert a given number to hours and minutes. 
function e51(n) {

    let hours = Math.floor(n / 60);
    let minutes = n % 60;

    if(n % 60 == 0) {
        console.log(hours + 'hours')
    } else {
        console.log(hours + 'h and ' + minutes + 'mins')
    }

}
// e51(127);

// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.
function e52(letters) {
    let alpOrder = letters.split('').sort();

    console.log(alpOrder)
}
// e52('fedcba');

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. 
function e53(str) {
    const pattern = (/a...b/).test(str) || (/b...a/).test(str);
    console.log(pattern);
}
// e53('chainsbreak');

// 54. Write a JavaScript program to count the number of vowels in a given string. 
function e54(str) {
    str = str.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsInString = [];

    str.forEach(e => vowels.includes(e) ? vowelsInString.push(e) : console.log(e + ' is not a vowel'));

    console.log(vowelsInString)

}
// e54('w3resources.com');

// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's. 
function e55(str) {
    str = str.split('');

    let numOfP = 0;
    let numOfT = 0;

    for(let i=0; i<str.length; i++) {
        if(str[i] == 'p') {
            numOfP++;
        } else if(str[i] == 't') {
            numOfT++;
        } else {
            // console.log('no p or t');
        }
    }

    if(numOfP == numOfT) {
        console.log('equal number of p and t');
    } else {
        console.log('non equal number of p and t')
    }
}
// e55('pstps');

// 56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
function e56(n1, n2) {
    let div = Math.round(n1 / n2).toString();
    div = div.split('');
    console.log(div);
}
// e56(80, 6);

// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
function e57(str, copies) {
    str = str.repeat(copies);
    console.log(str);
}
// e57('hi', 4);

// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
function e58(str, copies) {
    if(str.length >= 3) {
        lastThreeChars = str.slice(str.length - 3, str.length);       
        str = lastThreeChars.repeat(copies);
        console.log(str);   
    }
}
// e58('hello', 4);

// 59. Write a JavaScript program to extract the first half of a string of even length. 
function e59(str) {
    str = str.split('');

    if(str.length % 2 == 0) {
        str = str.slice(0, str.length / 2).join('');
        console.log(str)
    } else {
        console.log('string does not have an even length')
    }
}
// e59('hhhaaa');

// 60. Write a JavaScript program to create a new string without the first and last character of a given string.
function e60(str) {
    str = str.substr(1);
    str = str.substr(0, str.length -1);
    console.log(str);
}
// e60('javascript');