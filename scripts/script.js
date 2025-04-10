let student = {
    name: 'John Doe',
    age: 18,
    enrolled: true,
    courses: ['Math', 'Science', 'English', 'History'],
    displayInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`);
    }
};

// Part 1: Understanding and Creating Objects
student.displayInfo();
console.log(student.name)
console.log(student.age)

// Part 2: Working with JSON
let stringifyStudent = JSON.stringify(student);
console.log(stringifyStudent);
let parsedStudent = JSON.parse(stringifyStudent);
console.log(parsedStudent);

// Part 3: Using Destructuring Assignment
