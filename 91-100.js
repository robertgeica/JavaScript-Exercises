// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.
function e91(arr, k) {
    let temp = 0;
    let result = 0;
 
 
    for(let i=0; i<k-1; i++) {
        temp += arr[i];  
    }
    console.log(temp);
 
    for(let i=k-1; i<arr.length; i++) {
        temp += arr[i];
   
        if(temp > result) {
        result = temp;
        }
        temp -= arr[i - k + 1];
    }
  console.log(result);
}
// e91([1, 2, 3, 14, 5], 2);

// 92. Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.
function e92(arr) {
    let temp = 0;
    let newArr = [];
 
    for(let i=1; i<arr.length; i++) {
        temp = arr[i] - arr[i-1];
        newArr.push(temp);
    }
    let max = newArr.sort().reverse()[0];
    console.log(max);
}
// e92([1, 2, 3, 8, 9]);

// 93. Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
function e93(arr) {
    let arr2 = [], dif, result = 0;

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j!= i && j<arr.length; j++) {
             dif = Math.abs(arr[i] - arr[j]);
             result = Math.max(result, dif);
        }
    }
    console.log('result: ' + result);
}
// e93([1, 2, 3, 18, 9]);


// 94. Write a JavaScript program to find the number which appears most in a given array of integers.
function e94(arr) {
    arr.sort();
    let max = 0, result, freq = 0;
    
    for(let i=0; i<arr.length; i++) {
        // console.log('i:' + arr[i]);

        arr[i] === arr[i+1] ? freq++ : freq = 0;

        if(freq > max) {
            result = arr[i];
            max = freq;
        }
    }
    console.log(result);

}
// e94([1, 2, 3, 2, 3, 3]);

// 95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers. 
function e95(arr, n, m) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === n) {
            arr[i] = m;
        }
    }
    console.log(arr);
}
// e95([1, 2, 3, 3], 2, 0);

// 96. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.
function e96(arr) {
    let arr2 = [];

    let n, m, absDif, sum;
    for(let i=0; i<arr.length-1; i++) {
        n = arr[i];
        m = arr[i+1];
        absDif = Math.abs(n - m);
        arr2.push(absDif);
    }
        sum = arr2.reduce( (a, b) => a + b);
        console.log('sum: ' + sum);
}
// e96([1, 2, 3, 2, -5]);

// 97. Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it. 
function e97(input) {
  var flag;
  for (var i = input.length;; i++) {
    flag = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < input.length && input[j] != input[i - j - 1]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (var j = input.length; j < i; j++) {
        input += input[i - j - 1];
      }
      return input;
    }
  }
}
console.log(e97('abcddc'));





// 98. Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"
function e98(str) {
    let strArr = str.split('');
    let lower = 0, upper = 0;

    for(let i=0; i<strArr.length; i++) {
        (strArr[i] === strArr[i].toLowerCase()) ? lower++ : upper++;
    }
    
    (lower > upper) ? strArr = strArr.join('').toLowerCase() : strArr = strArr.join('').toUpperCase();
    console.log('result: ' + strArr);
}
// e98('PHp');


// 99. Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
function e99(str1, str2) {

    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    result = 'same';

    for(let i=0; i<str1.length; i++) {
        if(str1[i] != str2[i]) {
            result = 'dif';
        }
    }
    console.log(result);
}
// e99('xyz', 'zyx');

// 100. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
function e100(arr1, arr2) {
    let result;

    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<i; i++) {
            if(arr1[i] === arr2[j]) {
                result = 'at least one';
                break;
            }
        }
    }
    console.log('result: ' + result);
}
// e100([1, 2, 3], [3, 1, 5]);