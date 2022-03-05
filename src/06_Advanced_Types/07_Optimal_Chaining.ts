/**
 * Optinal Chaining: For when you get data from any source where you don't know with
 * certainty if in an object, a certain property is defined.
 */

const fetchedUserData = {
  id: "u1",
  name: "Gino",
  job: { title: "CEO", description: "My own company" }, // comment this as example
};

// console.log(fetchedUserData.job.title); // run ok when all attribute are in place.

//we could check if they exist in order and thus not throwing erros
//   if (fetchedUserData.job && fetchedUserData.job.title)

// The optional feature is available when you are not sure whether is defined or not.
// it does optimal chaining operator that helps safely access nested properties, nested
// objects in our object data.
console.log(fetchedUserData?.job?.title);

// ^^ it means: abc?. , does abc exist? if does, acces next "job"
// also for job?.   -> only access "title" if "job" is defined

//if first objects is undefined, it will not run the next, and not throwing Error
// and not continue.
