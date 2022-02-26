"use strict";
/*
In the tsconfig.js:
------------------
1. You can exclude in the tsconfig.json
    ,
  "exclude": [
    "analytics.ts"
  ]


2. if you want specify a pattern, e.g.    xxx.dev.ts


3. "Exclude" if set alongisde "Include" will filter down include.
 If we exclude some subfolder, of a folder that is part of the include, then
 that excluded sub-folder will be excluded

 It compiles "Include" minus "Exclude"

*/
