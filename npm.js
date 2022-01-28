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

const _ = require("lodash");
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);