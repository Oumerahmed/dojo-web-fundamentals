/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

var nums1 = [5, 2, 3];
var expected1 = 1;

var nums2 = [5, 4, 2, 2, 3];
var expected2 = 2;

var nums3 = [];
var expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
  var minIndex = 0

  for (var i = 0; i < nums.length; i++) {
    if (nums[minIndex] > nums[i]) {
      minIndex = i
    }
  }

  return minIndex
}


/*******************************************************************************/

/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

var arr1 = [1, 2, 3];
var expected1 = [3, 2, 1];

var arr2 = ['a', 'b'];
var expected2 = ['b', 'a'];

var arr3 = ['a'];
var expected3 = ['a'];

var arr4 = [];
var expected4 = [];

/**
 * Reverses the given arr in place without built in methods
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
  for (var i = 0; i < Math.floor(items.length / 2); i++) {
    var temp = items[i]
    items[i] = items[items.length - 1 - i]
    items[items.length - 1 - i] = temp
  }

  return items
}

console.log(reverseArr(arr1))