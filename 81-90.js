// 81. Write a JavaScript program to add two digits of a given positive integer of length two. 
function e81(num) {
    num = num.toString();
    console.log(parseInt(num[0]) + parseInt(num[1]));
}
// e81(24);

// 82. Write a JavaScript to add two positive integers without carry. 
function e82(arr1, arr2) {
    arr1 = arr1.toString().split('');
    arr2 = arr2.toString().split('');

    let arr3 = [];
    let arr4 = [];
 
    for(let i=0; i<arr1.length; i++) {
        arr3 = [parseInt(arr1[i]) + parseInt(arr2[i])];
        if(arr3[i] > 9) {
            arr3[i] = Math.floor(arr3[i] / 10);
        }
    arr4.push(arr3);
  }
    console.log(arr4.join(''));
}
// e82(222, 911);

// 83. Write a JavaScript to find the longest string from a given array of strings. 
function e83(arr) {
    let len1 = arr[0];
    let len2;

    for (let i = 1; i < arr.length; i++) {
        len2 = arr[i];
        if (len2 > len1) {
            len1 = len2;
        }
    }
    console.log(len1);
}
// e83(['a', 'aa', 'aaaa', 'aaa', 'aaaaa']);

// 84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.  Go to the editor
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
function e84(arr) {
    arr = arr.split('');
    for(let i=0; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }

    if(arr[arr.length -1] = 'z') {
        arr[arr.length -1] = 'a';
    }
    console.log(arr)
}
// e84('abcdxyz');

// 85. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
function e85(numbers) {
    let flag = true;
    let var1 = 0, var2 = 0;
 
    for(let i=0; i<numbers.length; i++) {
        if(flag) {
            var1 += numbers[i];
            flag = false;
        } else {
            var2 += numbers[i];
            flag = true;
        }
    }
    console.log(var1+var2)
}
// e85([1, 3, 6, 2, 5, 10]);

// 86. Write a JavaScript program to find the types of a given angle. 
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
function e86(angle) {
    if(angle < 90 && angle > 0) {
        console.log('acute');
    } else if(angle === 90) {
        console.log('right');
    } else if(angle < 180) {
        console.log('obtuse');
    } else {
        console.log('straight');
    }
}
// e86(178);

// 87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
function e87(arr1, arr2) {
    let flag = true;
 
    for(let i=0; i<arr1.length; i++) {
        if(!(arr1[i] == arr2[i])) {
            flag = false;
            break;
        }
    }
    console.log(flag);
}
// e87([10, 20, 30], [10, 20, 30])

// 88. Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.
function e88(var1, var2, divisor) {
    if(var1 % divisor == 0) {
        console.log('ok');
    }
}
// e88(10, 25, 5);

// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
function e89(x, y, z) {
    if(x + y === z || x - y === z || x * y === z || x / y === z) {
        console.log(z)
    }
}
// e89(10, 25, 250);

// 90. Write a JavaScript program to find the kth greatest element of a given array of integers
function e90(arr, k) {
    arr = arr.sort().reverse();
    console.log(arr);
    let kth;
 
    for(let i=0; i<arr.length; i++) {
        kth = arr[k];
    }
    console.log(kth)
}
// e90([1, 2, 6, 4, 5], 3);