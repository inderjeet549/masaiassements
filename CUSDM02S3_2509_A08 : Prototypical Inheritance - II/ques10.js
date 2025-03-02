class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}
// Student class inheriting from User
class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }
    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}
// Instructor class inheriting from User
class Instructor extends User{
    constructor(name,email,instructorId){
        super(name, email)
        this.instructorId = instructorId
    }
    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`)
    }
}
const student1 = new Student("John Doe", "john@example.com", "S123")
const instructor1 = new Instructor("Dr. Smith", "smith@example.com", "I456")
student1.getDetails()
student1.enroll()
instructor1.getDetails()
instructor1.assignGrade()
