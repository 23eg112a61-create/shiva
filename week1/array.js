/*HANDS-ON 1: Smart Login Status Engine--------
You are building a shopping cart summary for an e-commerce website.
Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/

let cart=[
    {id:101,name:"Laptop",price:60000,quantity:1,inStock:true},
    {id:102,name:"Mouse",price:800,quantity:2,inStock:true},
    {id:103,name:"Keyboard",price:1500,quantity:1,inStock:false},
    {id:104,name:"Monitor",price:12000,quantity:1,inStock:true}
];
let keys1=cart.filter(a=>a.inStock==true);
console.log(keys1);
let k1=c.map(a=>({name:a.name,totalPrice:a.price*a.quantity}));
console.log(k1);
let k2=c.reduce((a,r)=>a+(r.price*r.quantity),0);   
console.log(k2);
let k3=cart.find(a=>a.name=="Mouse");
console.log(k3);
let k4=cart.findIndex(a=>a.name=="Keyboard");
console.log(k4);    









/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
let students=[
    {id:1,name:"Ravi",marks:78},
    {id:2,name:"Anjali",marks:92},  
    {id:3,name:"Kiran",marks:35},
    {id:4,name:"Sneha",marks:88},
    {id:5,name:"Arjun",marks:40}    
];
let s1=students.filter(a=>a.marks>=40);
console.log(s1);    4
let s2=students.map(a=>{
    if(a.marks>=90)
    {
        return{...a,grade:"A"};
    }
    else if(a.marks>=75)
    {
        return{...a,grade:"B"};
    }
    else if(a.marks>=60)
    {
        return{...a,grade:"C"};
    }
    else{
        return{...a,grade:"D"};
    }
});
console.log(s2);
let s3=students.reduce((a,r)=>a+r.marks,0)/students.length;
console.log(s3);
let s4=students.find(a=>a.marks==92);
console.log(s4);
let s5=students.findIndex(a=>a.name=="Kiran");
console.log(s5);    
/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
let employees=[
    {id:201,name:"Amit",salary:45000,department:"IT"},
    {id:202,name:"Neha",salary:60000,department:"HR"},
    {id:203,name:"Rahul",salary:75000,department:"IT"},
    {id:204,name:"Pooja",salary:30000,department:"Sales"}
];
let e1=employees.filter(a=>a.department=="IT");
console.log(e1);
let e2=employees.map(a=>({...a,netSalary:a.salary+(a.salary*0.1)}));
console.log(e2);
let e3=employees.reduce((a,r)=>a+r.salary,0);
console.log(e3);
let e4=employees.find(a=>a.salary==30000);
console.log(e4);
let e5=employees.findIndex(a=>a.name=="Neha");
console.log(e5);    

/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const movies=[
    {id:1,title:"Inception",genre:"Sci-Fi",rating:8.8},
    {id:2,title:"Joker",genre:"Drama",rating:8.4},
    {id:3,title:"Avengers",genre:"Action",rating:8.0},
    {id:4,title:"Interstellar",genre:"Sci-Fi",rating:8.6}];
let h1=movies.filter(a=>a.genre=="Sci-Fi");
console.log(h1);
let h2=h1.map(a=>`${a.title} (${a.rating})`);   
console.log(h2);
let h3=movies.reduce((a,r)=>a+r.rating,0)/movies.length;
console.log(h3);
let h4=movies.find(a=>a.title=="Joker");
console.log(h4);
let h5=movies.findIndex(a=>a.title=="Avengers");
console.log(h5);

/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/
    const transactions=[
        {id:1,type:"credit",amount:5000},
        {id:2,type:"debit",amount:2000},
        {id:3,type:"credit",amount:10000},
        { id:4,type:"debit",amount:3000},
    ];
    let f1=transactions.filter(a=>a.type=="credit");
    console.log(f1);
    let f2=f1.map(a=>a.amount);
    console.log(f2);
    let f3=transactions.reduce((a,r)=>(r.type=="credit"?a+r.amount:a - r.amount),0);
    console.log(f3);
    let f4=transactions.find(a=>a.type=="debit");
    console.log(f4);
    let f5=transactions.findIndex(a=>a.amount==10000);
    console.log(f5);