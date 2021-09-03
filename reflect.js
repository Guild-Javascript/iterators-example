


const course = {
    title: 'javascript - the complete guide'
};

Reflect.setPrototypeOf(course, { toString() { return this.title }});

Reflect.defineProperty(course, 'price', {});

// console.log(course.toString());

const courseHandler = {
    get(object, propertyName) {
        console.log(propertyName);
        return object[propertyName];
    }
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title);