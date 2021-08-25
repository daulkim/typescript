class dog{
    // readonly name;
    // constructor(name: string){
    //     this.name = name;
    // }

    constructor(readonly name: string){
        this.name = name;
    }
}

var dung = new dog("test");
// error
// dung.name = "test";