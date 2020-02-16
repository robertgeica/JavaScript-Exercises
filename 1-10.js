// 1. Write a JavaScript program to display the current day and time in the following format.
var date = new Date();

function e01() {
    let ampm = (date.getHours() >= 12) ? "PM" : "AM";
    console.log("Current time is: " + date.getHours() + ampm + " : " + date.getMinutes() + " : " + date.getSeconds())


    let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    console.log("Today is: " + weekDays[date.getDay()]);

}
e01();
// 2. Write a JavaScript program to print the contents of the current window. 
function printPage() {
    window.print();
}

// 3. Write a JavaScript program to get the current date.
function e03() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    console.log(day + '/' + months[monthIndex] + '/' + year);


}
e03();

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function e04() {
    const a = 5;
    const b = 6;
    const c = 7;
    
    semiperimeter = (a + b + c) / 2;
    area = Math.sqrt(semiperimeter * ((semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c)));
    console.log(area);
}
e04();

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
function rotateString(id) {
    const element = document.getElementById(id);
    
    const textNode = element.childNodes[0];
    
    let text = textNode.data + " ";


    setInterval(() => {
        text = text[text.length -1] + text.substring(0, text.length -1);
        
        textNode.data = text;
    }, 800);
}

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function e06(year) {

    if (year % 4 == 0 && year % 100 !== 0) {
        console.log(year + ' is leap')
    } else if (year % 100 == 0 && year % 400 == 0) {
        console.log(year + ' is leap')

    } else {
        console.log(year + ' is not leap')
    }
}
e06(2018);

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
function e07() {
    for (let year = 2014; year <= 2050; year++) {
        const date2 = new Date(year, 0, 1);
        if (date2.getDay() === 0) {
            console.log("1st January is being Sunday on " + year);
        }    
    }
}
e07();

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
function e08(inputNumber) {

    let randomNumber = Math.floor(Math.random() * 10) + 1; // +1 to return a value from 1 to 10
    if (inputNumber > 0 && inputNumber <= 10) {
        if (inputNumber == randomNumber) {
            console.log("good work");
        } else {
            console.log("Not matched");
        }
    } else {
            console.log("Enter a number from 1 to 10!");
    }
}
e08(7);


// 9. Write a JavaScript program to calculate days left until next Christmas. 
function e09() {
    let christmas = new Date(date.getFullYear(), 11, 25);

    if (date.getMonth() == 11 && date.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1); 
    }

    let msPerDay = 24 * 60 * 60 * 1000;
    let christmasOutput = Math.ceil((christmas.getTime() - date.getTime()) / (msPerDay)) + " days left until christmas " + christmas.getFullYear();
    console.log(christmasOutput);
}
e09();


// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function e10(num1, num2) {
    let mp = num1 * num2;
    let div = num1 / num2;

    console.log('Multiply: ' + mp + '\n' + 'Divide: ' +  div);
}
e10(10, 5);