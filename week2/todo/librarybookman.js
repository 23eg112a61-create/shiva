
/*“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably

MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably

MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses

MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably*/
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
// MODULE-1 :USER PROCESSING ENGINE
// Get only active users
let activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);

// Extract names of active users
let activeUserNames = activeUsers.map(user => user.name);
console.log("Active User Names:", activeUserNames);
// Check if any admin exists
let adminExists = users.some(user => user.role === "admin");
console.log("Is there any admin?", adminExists);
// Find user by id
let userIdToFind = 2;
let foundUser = users.find(user => user.id === userIdToFind);
console.log(`User with ID ${userIdToFind}:`, foundUser);
// Deactivate a user immutably
let userIdToDeactivate = 3;
let updatedUsers = users.map(user =>
  user.id === userIdToDeactivate ? { ...user, active: false } : user
);
console.log("Updated Users:", updatedUsers);
// MODULE 2: COURSE CATALOG ENGINE
// Get published courses
let publishedCourses = courses.filter(course => course.published);
console.log("Published Courses:", publishedCourses);
// Sort courses by price (high → low)
let sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log("Courses sorted by price (high → low):", sortedCourses);
// Extract { title, price } only
let courseTitlesAndPrices = courses.map(course => ({
  title: course.title,
  price: course.price
}));
console.log("Course Titles and Prices:", courseTitlesAndPrices);
// Calculate total value of published courses
let totalPublishedCourseValue = publishedCourses.reduce((sum, course) => sum + course.price, 0);
console.log("Total Value of Published Courses:", totalPublishedCourseValue);
// Add a new course immutably
let newCourse = { id: 104, title: "Python", price: 1199, published: true };
let updatedCourses = [...courses, newCourse];
console.log("Updated Courses:", updatedCourses);
// MODULE 3: SHOPPING CART ENGINE   
// Merge cart with courses to get full course info
let cartWithCourseInfo = cart.map(cartItem => {
  let course = courses.find(c => c.id === cartItem.courseId);
  return { ...cartItem, ...course };
});
console.log("Cart with Course Info:", cartWithCourseInfo);
// Calculate total cart amount
let totalCartAmount = cartWithCourseInfo.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log("Total Cart Amount:", totalCartAmount);
// Increase quantity of a course (immutably)
let courseIdToIncrease = 101;
let updatedCart = cart.map(item =>  
  item.courseId === courseIdToIncrease ? { ...item, qty: item.qty + 1 } : item
);
console.log("Updated Cart:", updatedCart);
// Remove a course from cart
let courseIdToRemove = 103;
let cartAfterRemoval = cart.filter(item => item.courseId !== courseIdToRemove);
console.log("Cart after removal:", cartAfterRemoval);
// Check if all cart items are paid courses
let allPaidCourses = cartWithCourseInfo.every(item => item.price > 0);
console.log("Are all cart items paid courses?", allPaidCourses);
// MODULE 4: ROLE & PERMISSION ENGINE
// Get all role names
let roleNames = Object.keys(roles);
console.log("Role Names:", roleNames);
// Check if student can delete
let studentCanDelete = roles.student.includes("delete");
console.log("Can student delete?", studentCanDelete);
// Create a flat list of all unique permissions
let allPermissions = [...new Set(Object.values(roles).flat())];
console.log("All Unique Permissions:", allPermissions);
// Add new role moderator immutably
let updatedRoles = { ...roles, moderator: ["view", "update"] };
console.log("Updated Roles:", updatedRoles);