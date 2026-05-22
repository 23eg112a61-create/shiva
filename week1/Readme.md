# MERN Training Repository

Repository Link: [https://github.com/Mahitha-Allani/MERN_TRAINING/tree/main](https://github.com/Mahitha-Allani/MERN_TRAINING/tree/main)

---

# WEEK 1

## Topics Covered

* Advanced Array Operations
* Simple Array Operations
* Control Statements
* Object Operations
* Operators

---

## Advanced Array Operations

### Files

* advOpArr.js
* arrayadvop.js
* arrayadvop1.js
* arrayadvop2.js
* arrayadvop3.js
* arrayadvop4.js

### Functions & Methods Used

| Function / Syntax     | Purpose                             |
| --------------------- | ----------------------------------- |
| map()                 | Creates a new transformed array     |
| filter()              | Filters elements based on condition |
| reduce()              | Converts array into single value    |
| forEach()             | Iterates through array              |
| find()                | Finds first matching element        |
| some()                | Checks if any element matches       |
| every()               | Checks if all elements match        |
| sort()                | Sorts array values                  |
| push()                | Adds element at end                 |
| pop()                 | Removes last element                |
| shift()               | Removes first element               |
| unshift()             | Adds element at beginning           |
| slice()               | Returns portion of array            |
| splice()              | Adds/removes array items            |
| includes()            | Checks value existence              |
| indexOf()             | Returns element index               |
| Spread Operator (...) | Copies/merges arrays                |
| Destructuring         | Extracts values from arrays         |

### Example

```js
let nums = [1,2,3];

let squared = nums.map(n => n*n);

let even = nums.filter(n => n%2===0);

let sum = nums.reduce((a,b)=>a+b,0);
```

---

## Simple Array Operations

### Concepts Covered

* Array creation
* Traversing arrays
* Insertion and deletion
* Searching elements

### Example

```js
let arr = [10,20,30];

arr.push(40);
arr.pop();

console.log(arr[0]);
```

---

## Control Statements

### Statements Used

| Statement  | Use                           |
| ---------- | ----------------------------- |
| if         | Executes based on condition   |
| if-else    | Executes alternate block      |
| switch     | Multiple condition checking   |
| for loop   | Repeated execution            |
| while loop | Executes while condition true |
| do-while   | Executes at least once        |
| break      | Stops loop                    |
| continue   | Skips current iteration       |

### Example

```js
if(age >= 18){
   console.log("Eligible");
}
else{
   console.log("Not Eligible");
}
```

---

## Object Operations

### Concepts Covered

* Object creation
* Accessing properties
* Updating values
* Object methods

### Functions & Syntax

| Syntax           | Purpose                 |
| ---------------- | ----------------------- |
| obj.name         | Access property         |
| obj["name"]      | Dynamic property access |
| Object.keys()    | Returns object keys     |
| Object.values()  | Returns object values   |
| Object.entries() | Returns key-value pairs |
| Spread Operator  | Copies objects          |

### Example

```js
let student = {
   name: "Mahitha",
   age: 20
};

console.log(student.name);
```

---

## Operators

### Operators Learned

| Operator Type       | Examples                 |   |   |
| ------------------- | ------------------------ | - | - |
| Arithmetic          | + - * / %                |   |   |
| Assignment          | = += -=                  |   |   |
| Comparison          | == === != > <            |   |   |
| Logical             | &&                       |   | ! |
| Increment/Decrement | ++ --                    |   |   |
| Ternary             | condition ? true : false |   |   |

### Example

```js
let a = 10;
let b = 5;

console.log(a+b);
console.log(a>b);
```

---
