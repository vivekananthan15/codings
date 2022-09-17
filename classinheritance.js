class Students{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Students{
    show(){
        console.log(`Student Name ${this.name} and ${this.age}`);
    }    
}

let stu = new Student("vivek",22);
stu.show();