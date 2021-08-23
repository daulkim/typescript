class Person {
    firstName : string;
    lastName : string;

    // Multiple constructor implementations are not allowed.
    // constructor(){
    //     this.firstName = " ";
    //     this.lastName = " ";
    // }
  
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }



    getFullName() {
        return this.firstName+ " " +this.lastName;
    }
}

var personA = new Person("ken", "kim");

console.log(personA.getFullName());