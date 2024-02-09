// ``` symbol in JAvascript

let name ='vishal';
let repoCount =30

console.log(`hello this is ${name} my Repo Count is ${repoCount}`)

const gameName= new String('VISHAL RAjput')

console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);

//Substring exmple

//const newString =gameName.substring(0,4)
//console.log(newString);

const result01 = gameName.slice(4,1)
console.log(result01)
const newstring ='     vishal   '
console.log(newstring.trim())

const url = 'https://vis%20halrjpt.com'
console.log(url.trim())

console.log(url.replace('%20)', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))