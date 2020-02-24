// 71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
function e71(arr) {
    // arr = arr.split('');

    if(arr.length > 1) {
        if(arr[0] == 1) {
            console.log('first pos')
        }
        if(arr[arr.length -1] == 1) {
            console.log('last pos')
        }
    }

}
// e71([1, 2, 3, 1]);

// 72. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3. 
function e72(arr) {
    if(arr.length == 3) {
        if(arr[0] === arr[2]) {
            console.log('equal');
        }
    }
}
// e72([10, 20, 10]);

// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3.
function e73(arr) {
    if(arr.length == 3) {
        arr = arr.reverse();
        console.log(arr);
    }
}
// e73([1, 2, 3]);

// 74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
function e73(arr) {
    let firstChar = arr[0];
    let lastChar = arr[arr.length - 1];

    for(let i=0; i<arr.length; i++) {
        if(firstChar >= lastChar) {
            arr[i] = firstChar;
        } else if(lastChar >= firstChar) {
            arr[i] = lastChar;
        }
    }
    console.log(arr)
}
// e73([5, 2, 3, 4, 5]);

// 75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3. 
function e75(arr1, arr2) {
    let arr3 = [];

    if(arr1.length >= 2 && arr2.length >= 2) {
        arr3.push(arr1[1], arr2[1]);
    }
    console.log(arr3)

}
// e75([1, 2, 3], [4, 5, 6]);

// 76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.
function e76(arr) {
    if(arr.length > 1) {
        let newArr = [arr[0], arr[arr.length -1]];
        console.log(newArr);
    }
}
// e76([1, 2, 3, 4, 5]);

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
function e77(arr) {
    if(arr.length == 2) {
        for(let i=0; i<arr.length; i++) {
            if(arr[i] == 1 || arr[i] == 3) {
                console.log('ok')
            }
        }
    }
}
// e77([1, 4]);

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3. 
function e78(arr) {
    if(arr.length == 2) {
        for(let i=0; i<arr.length; i++) {
            if(arr[i] != 1 && arr[i] != 3) {
                console.log('ok')
            }
        }
    }
}
// e78([2, 4]);

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
function e79(arr) {
    (arr[0] === 30 && arr[1] === 30) || (arr[0] === 40 && arr[1] === 40) ? console.log('ok') : console.log('not ok');
}
// e79([30, 40]);

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function e80(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    arr[0] = last;
    arr[arr.length - 1] = first;
    console.log(arr);
}
e80([1, 2, 3, 4, 5]);