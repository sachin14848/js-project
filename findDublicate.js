function findDuplicate(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i];
        }
        map.set(arr[i], i);
    }
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
