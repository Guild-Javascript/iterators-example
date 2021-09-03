// Library land
const uid = Symbol('uid');
console.log(uid);

const user = {
    // id: 'p1',
    [uid]: 'p1',
    name: 'brandon',
    age: 26,
    [Symbol.toStringTag]: 'User'
};

// app land => using the library
user.id = 'p2'; // this should not be possible

console.log(user);
console.log(user.toString());

const company = {
    curEmployee: 0,
    employees: ['Max', 'Manu', 'Anna'],
    [Symbol.iterator]: function* employeeGenerator() {
    // getEmployee: function* employeeGenerator() {
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
    }
};

for (const employee of company) {
    console.log(employee);
}

console.log([...company]);

// const employeeIterator = company.getEmployee();
// console.log(employeeIterator.next());
// console.log(employeeIterator.next());
// console.log(employeeIterator.next());
// console.log(employeeIterator.next());
// console.log(employeeIterator.next());