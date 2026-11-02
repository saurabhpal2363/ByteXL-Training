const student = {name: "Saurabh", city: "Etawah", age: "20", college: "CGC", sem: 5};

for(let key in student) {
    console.log(`${key}: ${student[key]}`);
}