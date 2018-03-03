var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + person.lastName;
}
var user = new Student("Jane", "H.", "User");
//let user = [0, 1, 2];
document.body.innerHTML = greeter(user);
