// 31. Write a JavaScript program to find the largest of three given integers.
function e31(a, b, c) {
    let sortArray = [a, b, c];
    sortArray.sort((n1, n2) => n1 - n2);

    result = sortArray;
    console.log(result);
}
e31(9, 5, 7);

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function e32(n1, n2) {
    function nearest(x, y) {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);

        if (x1 > y1) {
            return y;
        } else {
            return x;
        }
    } 

    result = nearest(n1, n2);
    console.log(result);
}
e32(89, 20);

// 33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive. 
function e33(n1, n2) {
    n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60 ||
    n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100 ? 
    result = 'true' : result = 'false';
    console.log(result);
}
e33(55, 85);


// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function e34(x, y) {
    if (x >= 40 && y >= 40 && x <= 60 & y <= 60) {
        if (x > y) {
            result = x;
        } else {
            result = y;
        }
    }
    console.log(result);
}
e34(55, 77);

// 35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
function e35(string) {
    let strArr = string.split('');
    let findDuplicate = arr => arr.filter((item, index) => arr.indexOf(item) != index);
    result = findDuplicate(strArr);
    console.log(result);
}
e35('aslpls');

// 36. Write a JavaScript program to check if the last digit of the three given positive integers is same. 
function e36(number1, number2, number3) {
    let digit1 = getLastDigit(number1);
    let digit2 = getLastDigit(number2);
    let digit3 = getLastDigit(number3);

    digit1 == digit2 && digit2 == digit3 ? console.log('true') : console.log('false');

    function getLastDigit(number) {
        let lastDigit;
        // convert number to string and then to array
        number = number.toString().split('');
        // get last digit
        lastDigit = number.pop();

        return lastDigit;    
    }
}
e36(22, 32, 52);


// 37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
function e37(string) {
    if(string.length < 3) {
        return string.toUpperCase();
    }

    let str1 = (string.substring(0, 3)).toLowerCase();
    let str2 = string.substring(3, string.length);

    result = str1 + str2;
    console.log(result);
}
e37('dDa');

// 38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.
function e38(totalMarks, finalExam) {
    let gradeA = 'A+';

    if (finalExam.checked == true) {
        if (totalMarks >= 90) {
            result = gradeA;
        } else {
            result = 'false';
        }   
    } else {
        if(totalMarks >= 89 && totalMarks <=100) {
            result = gradeA;
        } else {
            result = 'false';
        }
    }
    console.log(result);
}
e38(55, 12);


// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. 
function e39(num1, num2) {
    let sum = num1 + num2; 

    sum >= 50 && sum <= 80 ? result = '65' : result = '80';
    console.log(result);
}
e39(22, 21);

// 40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.
function e40(n1, n2) {
    let result;

    if(n1 === 8 || n2 === 8) {
        result = n1 +  ' or ' + n2 + ' = 8';
    } else if(n1 + n2 == 8) {
        result = n1 +  ' + ' + n2 + ' = 8';
    } else if(n1 - n2 == 8) {
        result = n1 +  ' - ' + n2 + ' = 8';
    } else {
        result = n1 +  ' +/- ' + n2 + ' != 8';
    }

    console.log(result);
}
e40(12, 4);