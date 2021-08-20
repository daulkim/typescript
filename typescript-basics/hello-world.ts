var a: number;
var b: boolean;
var c: string;
var foo : undefined;

a = 10;
b = true;
c = 'Hello';

var myArr: number[];
myArr = [];
myArr = [1,2];
myArr.push(1);

a = myArr.pop();
// compile error -> js에선 타입이 없으므로 컴파일은 됨 
// a = true;
// b = myArr.pop();

/**
 * javascript -> 여러 타입을 가지는 배열 가능
 * typescript -> tuples 
 **/
var myTuple: [number,boolean];
myTuple = [1,true];

