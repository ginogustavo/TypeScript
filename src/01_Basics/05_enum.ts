/*
Enum
----
Only in TS, are automatically enumerated global constan indentifiers.
The labels are just translated to numbres starting form 0.
e.g.  enum {NEW, OLD}
Thus we avoid used strings, or numbers so we could get confused
const ADMIN = 1 or ADMIN = 'ADMIN'
*/

// const ADMIN = 0;
// const READ_ONLY=1;

// role: ADMIN

//if(person7.role === ADMIN){

    enum Role{ADMIN,READ_ONLY,AUTHOR} // upper case is not mandatory;
    //behind the scenes ADMIN receives value 0, READ_ONLY the value of 1, AUTHOR, value 2
    
    //you can change values.
    enum Role2{ADMIN = 5,READ_ONLY,AUTHOR}; //next ones increment in 1, READ_ONLY = 6, and so on. or you can assign your own values READ_ONLY = 150,etc
    
    enum Role3{ADMIN = 'admin',READ_ONLY=100,AUTHOR}; // can be strings and a mix of them.
    
    const person7 = {
        name : "Gino",
        age: 30,
        hobbies: ['Sports', 'Cooking'],
        role: Role.ADMIN
    }
    
    if(person7.role === Role.AUTHOR){
        console.log('is admin');
    }
    