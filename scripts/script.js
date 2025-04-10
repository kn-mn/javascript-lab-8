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
let {name, courses} = student;
console.log(name);
console.log(courses);

let grades = [86, 92, 90, 88];
let [first, second] = grades;
console.log(first);
console.log(second);

// Part 4: The Spread Operator
let copiedStudent = {...student};
let modifiedStudent = {...copiedStudent, graduationYear: 2023};
console.log(modifiedStudent);
modifiedStudent.displayInfo();

let combinedStudents = {...student, ...modifiedStudent};
console.log(combinedStudents);
combinedStudents.displayInfo();

// Part 5: Object Methods
student.addCourse = function(course) {
    this.courses.push(course);
}

student.totalCourses = function() {
    return this.courses.length;
}