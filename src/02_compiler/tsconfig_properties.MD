https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://www.typescriptlang.org/docs/handbook/compiler-options.html

# ts_core_libraries

## With option "lib": []

Allows you to specify which default objects and features TS notes.
e.g. Working with the DOM - methods and objects that are only valid in browser and not Node.js environtments.

If not "lib" is set, the default is assumed -> depending on your (javascript) target.

e.g. target: es6, it assume all es6 features available, so we could do: const map = Map()
and also all DOM features.

If "lib" is included:

## SourceMap:

Helps us for Debugging and Development.
Let see the TS files and not the JS file with source.
Set "sourceMap" to "true" and run tsc command again, you'll get .map files
These files act as a bridge, which is understood by modern browsers and developer tools, to connect the JS files to the input files.
When reload the app in the browser you can see the TS file and can debug directly on them.

## outDir & rootDir :

You organize files in folder, i.e. src and dist
dist - hold all output, i.e. the JS files, change path in index.html
src - hold TS files

## removeComments :

speaks for itself

## notEmits:

if you don't want to generate any JS files - when you want just to check whether your files are correct, but you don't want to write all these output files to save more time.
when set to "true" -> the TS compiler checks the files and report any pontential errors without actually creating an output file.

## downlevelIteration:

When you compile your code to older version of JS and you work with
for loops, in some scenarios compilation doesn't work correctly. With this option gives more exact compilation which will work in those cases. But will output more verbose code. only Turn on if you have loops and you code behaves diffently.

## noEmitOnError: (default) false

Normally, when you got an error in TS, the error is shown but the JS is generated anyway.
This could be or not a desited scenario, maybe if you are sure no error you can let it go
Set this property to "false" tells the compiler you are ok on generating files even with errors.
if set to true, not only problematic files but any files won't be generated.
I set it to true, I aim to have files without errors and dont want files with errors.

## strict:

If only set "strict" : true -> same as the default of the other strict properties.

## noImplicitAny:

ensure the values we work in our code, if set to false,
function send(data){}. won't give an error.

In TS, for parameters is not ok to have any, specify it with a type. for variables,
let logged; --> this is any but is ok, bc TS can track the values assigned
logged = true;

## stricNullCheck: false,

tells TS to be strict regardin how you access and work with values that might hold a null value
