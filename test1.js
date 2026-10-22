// var setBit = function(n, k) {
//     const count = n.toString(2).split('');
//     const rev = count.reverse();
//     console.log(rev);
//     console.log(count);
//     count[k] = '0';
//     console.log(count);
//     return parseInt(count.join(''), 2);
// };

// console.log(setBit(1363, 4));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let i = 0; i < 3; i++){
        let value = nums[nums.length - 1];
        nums.unshift(value);
        nums.shift(nums.length - 1)
        // for (let j = nums.length; j < index; j++){
        //     nums[j] = nums[j - 1];
        // }
        // nums[index] = value;
    }
};

console.log(rotate([1,2,3,4,5,6,7], 3));