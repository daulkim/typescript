class Person1{
    firstName: string;
    lastName: string;
    greet(){
        console.log("Hey there!");
    }
}

class Programmer extends Person1{
    greet(){
        console.log("Hello world");
    }
    greetLikeNormalPeople(){
        super.greet();
    }
}

var programmerA: Person1 = new Programmer();
programmerA.greet();

// 타입을 person1으로 지정시 Programmer로 변수 선언은 가능
// but, greetLikeNormalPeople() 호출 불가
// programmerA.greetLikeNormalPeople();