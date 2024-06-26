// const accountId=1
// let Name="Sahil"
// var password="1123"
// city="Jaipur"

// Name="Sahil Chouhan"
// password="111122223334455"
// city="Banglore"

// console.log(accountId)
// console.table([accountId, Name, password, city])
// console.log(Name)

// console.log(typeof "Sahil")
// console.log(typeof 1)

// let score="33"
// console.log(typeof score)

// let valueInNumber=Number(score)

// console.log(typeof score)
// console.log(typeof valueInNumber)



// let value=3

// let negValue=-value

// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)


// let str="abc";
// let str1="bcd";
// let str3="def";

// console.log(str+str1+str3);

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")

// console.log((3+4)*5%3)




// const score=100
// const scorevalue=100.1

// const isLoggedIn=false;
// const outsideTemp=null;
// let userEmail;

// const id = Symbol('123');
// const anotherId=Symbol('123')

// console.log(id===anotherId);

// const bigNumber=123144587465864154654864186415415353421n

// const heros=["saktiman","hero","other"];
// let myobj={
//     name : "Sahil",
//     age: 1,
// }

// const myFunction=function(){
//     console.log("Hello World");
// }

// console.log(typeof myFunction)

// function NewFunction(getValue){
//     getValue="sadffgg";
//     return getValue
// }

// const getValue="ss";
// console.log(NewFunction(getValue));

// let myVariable="This";
// let anotherVariable=myVariable;
// anotherVariable="variable";

// console.log(myVariable)
// console.log(anotherVariable)

// let userOne={
//     email:"sahilchouhan0103@gmail.com",
//     upi:"sahil@.com"
// }
// let userTwo=userOne;
// userTwo.email="sc452228@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);

// let mydate=new Date();
// console.log(mydate);
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())

// const arr=[0,1,2,3,4,5,6,7,8,9,10];
// arr.push(6)
// arr.pop()
// console.log(arr);

// const myArr=['jai','ho']
// //console.log(myArr)
// const arr=['Jai','Ho'];
// //console.log(arr)

// // myArr.push(arr)
// // console.log(myArr)
// const newArr=myArr.concat(arr);
// console.log(newArr);

// const newarr=[...myArr,...arr]
// console.log(newarr)

// const mysym=Symbol["key1"]

// const myobj={
//   name:"Sahil",
//   "full name":"Sahil Chouhan",
//   [mysym]:"myKey1",
//   age:18,
//   location:"Jaipur",
//   email:"sahilchouhan0103pl@gmail.com",
//   IsLoggedIn:false
// }

// console.log(myobj.email);
// console.log(myobj["full name"])
// console.log(myobj[mysym])

// myobj.email="sahilchouhan";
// Object.freeze(myobj)
// myobj.email="sahilchouhan";

// console.log(myobj)

// myobj.greeting=function(){
//      console.log(`Hello Js User ${this["full name"]}`);
// }

// console.log(myobj.greeting());
// console.log(myobj.greeting)

// const SingleObject=new Object()
// const EmptyObj={}
// // console.log(EmptyObj);
// EmptyObj.name="Sahil "

// EmptyObj.age=18

// console.log(EmptyObj);

// const NewObj={
//   name:"Sahil",
//   age:18,
//   User:{
//     fullname:{
//       Fname:"Sahil",
//       Lname:"Chouhan"
//     }
//   }

//   }

//   console.log(NewObj.User.fullname.Lname)

//   let obj1={1:"a",2:"b"}
//   let obj2={1:"a",2:"b"}
//   let obj3={1:"a",2:"b"}

//   // let obj4={obj1,obj2,obj3};

//   // console.log(obj4)

//   // let obj5=Object.assign(obj1,obj2,obj3)

//   // console.log(obj5)

//  let obj4={...obj1,...obj2}
//  console.log(obj4)

// function addTwoNumber(Number1,Number2){
//   return Number1+Number2;
// }

// const result=addTwoNumber(1,2)
// console.log(result)

// function UserLogin(Username){
  
   
//   if(Username===undefined){
//     console.log("Please enter your name");
//   }
//   else{
//     console.log("User Exist")
//   }


// }

// console.log(UserLogin(""))

// user={
//   name:"Sahil",
//   email:"sahil@GAMIL.COM"
// }

// function haOb(anyobject){
//   console.log(`User name is ${anyobject.name} and email ${anyobject.email}`)
// }

// // haOb(user)

// haOb({
//   name:"Sahil",
//   email:"sahil@GAMIL.COM"
// })

// user={
//   username:"Sahil",
//   email:"sahilchouhan0103pl@gmail.com",
//   wellcomeMessage:function(){
//       console.log(`${this.username} Wellcome to here`)
//       //console.log(this)
//   }
// }

// // console.log(user.wellcomeMessage())
// // user.username='Sam'
// // console.log(user.wellcomeMessage())

// console.log(this)


// function wellcomeMessage(){
//   let name="Same";
//   console.log(this.name)
// }

// wellcomeMessage()



// const fun=function(){
//   let name="Sahil"
//   console.log(this.name)
// }

// fun()

// const arrow = () => {
//   let name="Abhi"
//   console.log(this.name)
// } 

// arrow()

// const addNumber = (num1,num2) => {
  
//   return num1+num2

// }

// console.log(addNumber(5,2));

