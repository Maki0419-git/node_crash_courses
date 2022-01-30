//npm : provide info about the project

//npm -global command,comes with node
//npm --version

//local depency use it only in this particular project
//npm i <packageName>

//global depency use it only in any project
//npm install -g <packageName>

//package.json-manifest file (info about project/package)
//npm init
//npm init -y(everything default)
//npm i <packageName> -D (only install when dev)
//npm uninstall <packageName>
//npm vs npx: https://medium.com/itsems-frontend/whats-npx-e83400efe7f8
//package.json:https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/

const _ = require("lodash");
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);