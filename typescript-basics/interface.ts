interface Person2 {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class something implements Person{
    firstName: string;
    lastName: string;
    getFullName(): string {
      return this.firstName + this.lastName;
    }
}

let aPerson: Person2 = new something();

let someObj = {
    firstName: "test",
    lastName: "test",
    foo: 10,
    getFullName: () => "Test"
};

// 구조가 같으면 할당 가능
aPerson = someObj;
// error
// someObj = aPerson;