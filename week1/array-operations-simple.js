/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.
Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];
Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    */
   
    let tempera=[32,35,28,40,38,30,42];
    let t1=tempera.filter(t=>t>35);
    console.log(t1);
    let t2=tempera.map(a=>(a*9/5)+32);
    console.log(t2);
    let t4=tempera.reduce((a,r)=>(a+r,0)/tempera.length);
    console.log(t4);
    let t5=tempera.find(a=>a>40);
    console.log(t5);
    let t6=tempera.findIndex(a=>a==28);
    console.log(t6);




/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.
Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];
Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/

    const c=["javascript","react","node","mongodb","express"]; 
    let c1=c.filter(a=>a.length>5);
    console.log(c1);
    let c2=c.map(a=>a.toUpperCase());
    console.log(c2);
    let c3=c.reduce((a,r)=>a+" | "+r);
    console.log(c3);
    let c4=c.find(a=>a=="react");
    console.log(c4);
    let c5=c.findIndex(a=>a=="node");
    console.log(c5);


    

/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/
    
    let mark=[78,92,35,88,40,67];
    let m1=mark.filter(a=>a>=40);
    console.log(m1);    
    let r=mark.map(a=>a+5);
    console.log(r);
    let h=mark.reduce((a,b)=>a>b?a:b);
    console.log(h);
    let m4=mark.find(a=>a<40);
    console.log(m4);
    let m5=mark.findIndex(a=>a==92);
    console.log(m5)