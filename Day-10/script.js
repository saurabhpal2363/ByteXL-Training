// function showCourse(course) {
//     console.log(`Your course is ${course}`);
// };

// showCourse("Btech");
// showCourse("Mtech");

// function greet(name) {
//     console.log(`Hello ${name}`);
// };

// greet("Aman");
// greet("Saurabh");

// function isValid(n) {
//     let flag = n < 0 || n > 100 ? false : true;

//     return flag;
// }

// console.log(isValid(200));
// console.log(isValid(20));

function rectangleArea(w, h) {
    return w * h;
};

console.log(`Area of Rectangle is ${rectangleArea(5, 4)}`);

const checkEven = (n) => n % 2 == 0 ? "Even" : "Odd";

function findCube1(n) {
    return n * n * n;
};

const cube = function findCube2(n) {
    return n * n * n;
};

const cube2 = (n) => n * n * n;