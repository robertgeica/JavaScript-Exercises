// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
function e101(str) {
    let result = true;
    for(let i=0; i<str.length; i++) {
        if(!/[a-z]/gi.test(str[i])) {
            result = false;
            break;
        }
    }

    let lower = str.toLowerCase();
    for(let j=0; j<lower.length; j++) {
        if(lower[j] == lower[j+1]) {
            result = false;
            break;
        }
    }
    console.log(result);
}
e101('xYr');

// 102. Write a JavaScript program to find the number of inversions of a given array of integers.
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
function e102(arr) {
    let inversion = 0;

    for(let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if(arr[i] > arr[j] && i < j) {
                inversion++;
            }
        }
    }
    console.log(inversion);

}
// e102([1, 5, 4, 3]);

// 103. Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.
function e103(num) {
    let arr = num.toString(10).split('').map(toNum => parseInt(toNum));
    let arr2 = [...arr];
    let removeLast = arr.pop();
    let removeFirst = arr2.shift();
    let num1 = arr.join('');
    let num2 = arr2.join('');
    num1 > num2 ? console.log(num1) : console.log(num2);

}
// e103(1245)

// 104. Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.
function e104(arr, n1) {
    let result = 0;

    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            let absDif = Math.abs(arr[i] - arr[j]);
            if(absDif <= n1) {
                result = Math.max(result, absDif);
            }
        }
    }
    console.log(result);

}
// e104([12, 10, 33, 44], 40);


// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
function e105(num) {

    const digitSum = num => {
        let sum = 0;
        while(num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };
    
    let convert = 0;

    while(num > 10) {
        convert += 1;
        num = digitSum(num);
    }

    console.log(convert);

}
// e105(156);

// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
function e106(n1, n2) {
    if(n2 == 1) {
        return n1;
    } else {
        while(n1 % n2 === 0) {
            n1 /= n2;
        }
        console.log(n1);
        return n1;
    }
}
// e106(20, 2);

// 107. Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
function e107(arr) {
    let pairs = 0;

    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                console.log(`(${arr[i]}, ${arr[j]})`);
                pairs++;
            }
        }
    }
    console.log(pairs);
}
// e107([2,4,16]);

// 108. Write a JavaScript program to create the dot products of two given 3D vectors.
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
function e108(v1, v2) {
    let result = 0;
    for(let i=0; i<3; i++) {
        result += v1[i] * v2[i];
    }
    console.log(result);
}
// e108([1,2,3], [1,2,3]);

// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
function e109(number) {
    const arr1 = [];

    const isPrime = x => {
        for(let i = 2; i < x; i++) {
            if(x % i === 0) {
                return false;
            }            
        }
        return x > 1;
    }

    for(let i=0; i<=number; i++) {
        isPrime(i) ? arr1.push(i) : console.log(i);
    }

    console.log(arr1);
}
// e109(11);


// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
function e110(sequence, number) {
    let even = 0;

    for(let i=0; i<sequence.length; i++) {
        
        if(sequence[i] % 2 === 0 && sequence[i] !== number) {
            // console.log(i);
            even++;
        }

        if(sequence[i] === number) {
            console.log('result: ' + even);
            return even;
        }
        
    }
}
// e110([1, 2, 3, 4, 5, 6, 7, 8], 5);