function echo<T>(arg: T): T{
    return arg;
}

// <T>없으면 가능
// var myStr: string = echo(1);
var myStr: string = echo<string>("1");

class Person3 {
    constructor(private firstName, private lastName){
        
    }

    getFirstName(){
        return this.firstName;
    }
}

class admin extends Person3{

}

class manager extends Person3{
    
}

var admin1 = new Person3('1','1');
var manager1 = new Person3('2','2');

function personEcho<T extends Person3>(person : T): T{
    return person;
}
