 /*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields
*/
let user={
    id:101,
    name:"Ravi",
    email:"ravi@gmail.com",
    role:"student",
    isActive:true
};
console.log(user.name);
console.log(user.email);
user.lastLogin="2026-01-01";
console.log(user);
user.role="admin";
console.log(user);
delete user.isActive;
console.log(user);
let u=Object.keys(user);
console.log(u); 


/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90
*/
let marks={
    maths:78,
    physics:65,
    chemistry:82,
    english:55 };
let total=marks.maths+marks.physics+marks.chemistry+marks.english;
console.log(total);
let average=total/4;
console.log(average);
let highestSubject = Object.keys(marks).reduce((a, b) => marks[a] > marks[b] ? a : b);
console.log(highestSubject);
marks.computer=90;
console.log(marks);



/*Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified*/
let settings={
    theme:"light",
    notifications:true,
    autoSave:false, 
    language:"en" };
if(settings.theme==="light")
{
    settings.theme="dark";
}
else{
    settings.theme="light";
}   
console.log(settings);
settings.autoSave=true;
console.log(settings);
delete settings.notifications;
console.log(settings);
Object.freeze(settings);
settings.language="fr";
console.log(settings);