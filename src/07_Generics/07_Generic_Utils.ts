interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title:string, description:string, date:Date):CourseGoal{
    // return {title:title, description:description, completeUntil:date}

    // Partial wraps our own type that initially can have no defined values for its properties(optional)
    let courseGoal:Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

//2. Readonly type
const names: Readonly<string[]> = ['Max', 'Ana'];
//names.push('Manu');  //cannot add
//names.pop();  //cannot read. bc its  readyonly
//you can also mark readyonly for objects, to avoid add new properties


//Generic Types VS Unions


//This
class DataStorage<T extends string | number | boolean>{
    private data:T[] = [];
}

//Is not equal to this
class DataStorage2{
    private data: (string|number|boolean)[] = [];
}
// - > This is not either an array of string or array of numbers. 
// It says, it's an array which can have strings, numbers, and booleans mixed.

//you could say
class DataStorage3{
    private data: string[]|number[]|boolean[] = [];
}
//But depending on what we actually set thi data array to be either of the types, 
//we are not allowed to add a number or a boolean or a string .
//The problem with UNION types, we accept any of these values every time this method gets called, add or remove

// The Generic, you have to choose one, and then you are only allow to add that exact type of data.
// you use union type when you want to be flexible of types, Generic intended to be just one.


//https://www.typescriptlang.org/docs/handbook/2/generics.html