var a = 10;
// a에는 이미 number 할당 됐으므로 error
// a = true;

function greet() : string{
    return "Good morning";
}

// Type of greeting -> string
var greeting = greet();

// Type of greeting2 -> any
var greeting2;
greeting2 = greet();

