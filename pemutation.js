var result = [];
function permute(str, prefix = "")  {

    if(str.length ===0) {
        result.push(prefix);
    }

    for(let i = 0; i < str.length; i++) {
        const newfin = prefix + str[i];
        permute(str.slice(0, i) + str.slice(i + 1), newfin);    
    }

}

permute("abc", "");

console.log(result);


function print_output(n){
    /*Print all mulitples of 5 */
    if (n <= 0) {
        console.log(n);
        return n;
    } 
      const dd = n % 5;

    if (dd === 0) {
        print_output(n - 5);
    } else {
        print_output(n - dd);
    }

    if(n % 5 === 0) {
        console.log(n);
    }
    
}

print_output(18);