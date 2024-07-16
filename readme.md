# Introduction

The main project of web platform that performing router, state management, webapp demo, and build

confirmed up to node.js v18.16.1, Evaluating v20.15.0


# Running an webapp demo
To demoing :

```
$ ./install.sh
$ npm run start
```

# Build & Upload
To make the webapp live :

$ npm run build

Upload the files inside build folder to the server directory

## Versioning track

v0.0.2 typo for User-Settings tab is called user, not users. and the filter for procValid by 
procInstanceName instead of proc_instance_name
v0.0.3 Open views from other views
v0.0.4 Added our own loading-logo spinning for GetViewData and all POST actions with files and hidden the standard mwc-circular-progress spinning