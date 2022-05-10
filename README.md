# mern-website-demo

React

sperad and rest operator

sparad ...
const arr=[1,2,3]
const arr1=[4,...arr]
op- 4123

const person ={
	name:"abc"
}
const newperson = {
	...person,
	age:40
}
op-[name:"abc" age:40]

rest operator
function argument passed the ... sparad
flxible passed the argumantes.

const hello(...all){
	console.log(all)
}
hello(1,2,3,4,5)

array destructuring
 array value passed as used a variable.

====>reference (array,object) = does not copy value but we will assign a value and point the value
	let person ={
		name:"parul"
	}
	let person1 = person
	person1.name ="rishiv"
	console.log(person)
	console.log(person1)
	o/p=>rishiv
	    rishiv

// copy object
	let person ={
		name:"parul"
	}
	let person1 = {
		...person         // copy object
	}
	person1.name ="rishiv"
	console.log(person)
	console.log(person1)
	o/p=>parul
	     rishiv
primitive type(string,number)=> copy the value of a
 const a= 10
 let b= a
 console.log("a",a)
 console.log("b",b)
 o/p =>a 10
      b=10
