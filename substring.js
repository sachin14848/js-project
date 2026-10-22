
var result = [];
function subString(str, fin){

    if(str.length === 0){
        result.push(fin);
        return;
    }

    const newfin = fin + str[0];
    subString(str.slice(1), fin);
    subString(str.slice(1), newfin);

}

subString("abc", "");

console.log(result);


const result2 = [];

function subsequence(str, index, current) {
    if (index === str.length) {
        result2.push(current);
        return;
    }

    // Don't take
    subsequence(str, index + 1, current);

    // Take
    subsequence(str, index + 1, current + str[index]);
}

subsequence("abc", 0, "");

console.log(result2);

var result = [];
function subS(arr, i, current = []){
  if(arr.length === i){
    result.push(current);
    return;
  }
  subS(arr, i + 1, current);

  subS(arr, i+1, [...current, arr[i]]);
  

  
}
subS([1,2,3], 0, []);
console.log(result);