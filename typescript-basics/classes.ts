export class Person {
    // private firstName : string;
    // private lastName : string;

    // Multiple constructor implementations are not allowed.
    // constructor(){
    //     this.firstName = " ";
    //     this.lastName = " ";
    // }
  
    // 변수를 선언하지 않을수 있지만 이때는 꼭 접근제어자를 붙여줘야함
    constructor(private firstName: string, private lastName: string){

    }
    getFirstName(){
        return this.firstName;
    }
    getFullName() {
        return this.firstName+ " " +this.lastName;
    }
    setFirstName(firstName: string){
        this.firstName = this.firstName;
    }

    getlastName(){
        return this.lastName;
    }

    setlastName(lastName: string){
        this.lastName = this.lastName;
    }
}

var personA = new Person("ken", "kim");

console.log(personA.getFullName());