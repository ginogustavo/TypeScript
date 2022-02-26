//Arrays
const person4  = {
    name : "Gino",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities:string[];
favoriteActivities = ['Sports']

// favoriteActivities = ['Sports', 434] // not supported
// If we want to favor multi types, we use "any" (not recommended)
let favoriteActivities2:any[];
//favoriteActivities2 = 5 // not valid bc you say at least is a array of any not a number.

console.log(person4.name)

for(const hobby of person4.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) //error bc inferred type is string not array
}