10/21/2020
/* 
    Array: Concat
    .push allowed
    Replicate JavaScript’s concat() . Create a standalone function 
    that accepts two arrays. Return a new array containing the first 
    array’s elements, followed by the second array’s elements. Do not 
    alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should 
    return new array ['a','b',1,2] .
*/

function twoArrays(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++){
        newArr.push(arr2[j]);
    }
    return newArr
}

var arr1 = ["a","b","c","d","e"];
var arr2 = [1,2,3,4,5,6];
console.log(twoArrays(arr1,arr2))

/* 
    Array: Reverse
    Given a numerical array, reverse the order of values, in-place. 
    The reversed array should have the same length, with existing elements 
    moved to other indices so that order of elements is reversed. Working 
    ‘in-place’ means that you cannot use a second array – move values within 
    the array that you are given . As always, do not use built-in array 
    functions such as splice() .
*/

function reverseArray(arr) {
    var newArr = [];
    for (var i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    newArr = arr;
    return arr;
}

arr = [5,4,3,2,1];
console.log(arr);


// OR


arr = [1,4,46,7,3,32,56];
var counter = arr.length / 2;
function reverseArray(arr) {
    for (var i = 0; i <= Math.floor(counter); i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
            // 1 = 6
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverseArray(arr))

