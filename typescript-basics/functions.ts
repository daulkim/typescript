function add(a: number, b: number){
    return a+b;
}

// c is optional
function addMore(a, b, c?){
    return a+b;
}

// c has default value
function addDefault(a, b, c=0){
    return a+b+c;
}

var sum = add(1,2);
console.log(sum);

var sumMore = addMore(1,2);
console.log(sumMore);
sumMore = addMore(1,2,3);
console.log(sumMore);

var sumDefault = addDefault(1,2,3);
console.log(sumDefault);
sumDefault = addDefault(1,2);
console.log(sumDefault);
// error
//var sum = add("foo",2);


