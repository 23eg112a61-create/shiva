/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
let user={
    id:101,
    name:"ravi",
    preferences:{
        theme:"dark",
        languag:"en"
    }
};
//1. Create a shallow copy of user
let copieduser={...user,name:"raju"};
//2. Change:
//      i. name in the copied object
//      ii. preferences.theme in the copied object  
copieduser.preferences.theme="light";
//      iii .Log both original and copied objects
console.log("Original User:",user); 
console.log("copied user:",copieduser);
//      iv. Observe what changes and what doesn’t
console.log("observation",user);



/*Hands-On 2: Deep Copy (Isolation& Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
            let order={
    orderId:"ORD1001",
    customer:{
        name:"Anitha",
        address:{
            city:"Hyderabad",
             pincode:500085,
        }
    },
          items:[
            {
                product:"Laptop", price:70000
          }
          ] 
    }
//1. Create a deep copy of order
let copi={...order,
customer:{...order.customer,
address:{...order.customer.address}},
items:order.items.map(item=>({...item}))};
//2. Modify in copied object:
//      i. customer.address.city
copi.customer.address.city="Bangalore";
//      ii. items[0].price
copi.items[0].price=65000;
//      iii. Verify original object remains unchanged
console.log("Original Order:",order);
console.log("Copied Order:",copi);