## compatible es6

https://kangax.github.io/compat-table/es6/

"let" variables are availabe in the block defiend
i.e. function, if, for, or just curly brances block { }

## function

```javascript
const add = (a:number, b:number) = > a+b;
console.log(add(2,3));
```

one parameter

```javascript
const printOutput = (output:string|number) = > console.log(output);

const printOutput: (a:number|string)=>void =  output = > console.log(output);

//or
if(button){
    button.addEventListener('click', event=> console.log(event))
}
```
