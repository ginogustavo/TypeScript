"use strict";
/*
Watch mode
----------
We can tel TS to watch a file and whenever that file changes, TS will recompile.
$ tsc app.ts --watch
$ tsc app.ts --w
*/
console.log("Initial application 6...");
const username = "Gino";
//username = 3; // compile fails.
//downside: we need to specify a file.
/*
if we need it for a project (multiple files)
===========================================
    $tsc --init
Everything in this folder where you run this command, is managed by TS.
It creates the "tsconfig.json" file
This file is the indicator for TS that the project in which this file lies, and all subfolders,
should be managed by TS.

Now we can run just like  (without pointing an specific file)
$ tsc

It'll tell TS to compile all TS files it can find in this project.
and it can be combined with "watch" mode

$ tsc -w
*/
