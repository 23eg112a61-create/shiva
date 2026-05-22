# Topics Covered

* JavaScript Functions
* ES6 Features
* Arrow Functions
* Callback Functions
* String Operations
### Important Syntax

| Syntax                  | Purpose                          |
| ----------------------- | -------------------------------- |
| Arrow Function (=>)     | Short function syntax            |
| Template Literals       | Dynamic strings                  |
| Default Parameters      | Default values in functions      |
| Rest Operator (...args) | Accepts multiple arguments       |
| Callback Functions      | Function inside another function |

### Example

```js
const greet = (name) => {
   return `Hello ${name}`;
}
```
### TO-DO APP MODULES
APP --- MAIN
TASK -- CREATE TASK
VALIDATOR -- VALIDATE TASK

---

### SHALLOW DEEP COPY

```js
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2.push(6);
console.log(arr1); // [1, 2, 3, 4, 5, 6]

shallow deep copy is not possible in JS because of the reference types.
instead of using arr2 = arr1, we use arr2 = arr1.slice();
