// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function e11(temperature) {
    let celsius = (temperature - 32) * 5/9;
    console.log(celsius + " \xB0C");

    let fahrenheit = celsius * 9/5 + 32;
    console.log(fahrenheit + " \xB0F");

}
e11(12);

// 12. Write a JavaScript program to get the website URL (loading page).
//document.getElementById("id").innerHTML = document.URL;


// 13. Write a JavaScript exercise to create a variable using a user-defined name.
function e13() {
    let varName = 'abcdef';
    let n = 77;
    this[varName] = n;

    console.log(this[varName]);
}
e13();

// 14. Write a JavaScript exercise to get the extension of a filename.
function e14(filename) {
    let result = filename.split('.').pop();
    console.log(result)
}
e14('script.js');

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function e15(number) {
    let result;

    if(number <= 13) {
        result = 13 - number;
        console.log(result);
    } else {
        result = (number - 13) * 2;
        console.log(result);
    }

}
e15(20);

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 
function e16(num1, num2) {
    let addition = num1 + num2;
    let result;
    result = (num1 == num2) ? (addition * 3) : (addition); 
    console.log(result);
}
e16(20, 20);

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. 
function e17(num) {
    let result;
    let givenNumber = 19;

    let difference = num - givenNumber;
    result = (num > 19) ? (difference) * 3 : (19 - num);
    console.log(result);
}
e17(20);

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function e18(n1, n2) {
    let result;

    ((n1 === 50) || (n2 === 50) || (n1 + n2 === 50)) ? result = 'true' : result = 'false';
    console.log(result);
}
e18(25, 25);

// 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.
function e19(num) {
    let result;

    let x = Math.abs(100 - num);
    let y = Math.abs(400 - num);

    x <= 20 || y <= 20 ? result = 'true' : result ='false';
    console.log(result);
}
e19(40);

// 20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.
function e20(num1, num2) {
    let result;

    (num1 > 0 && num2 < 0)  || (num1 < 0 && num2 > 0) ? result = "true" : result = "false";
    console.log(result);
}
e20(12, -5);