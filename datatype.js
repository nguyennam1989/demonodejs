/**
 * Created by nam on 21/05/2015.
 */
"use strict"
var age =10;
const pi = 3.14158;
console.log(typeof pi);
if (parseInt(age)){
    console.log("Age is Number");

}//NaN
var  myage ="27";
    var myage2=parseInt(myage);
//Boolean [true false]
var nodeje_slow =false;
var iojs_fast =true;
if(nodeje_slow){
    console.log("Nodejs is slow");}
    else{

    console.log("Nodejs is fast");
}
if(!nodeje_slow){
    console.log("Nodejs is slow");
}
if(!nodeje_slow && iojs_fast){
    console.log("Both Node.js and io.js is are fast");
}
//string
var best_film ="Gone with the wind";
var best_hero="Bat man";
var best_player ='Bjork\'ka';
console.log(best_player);
var my_folder ="/Volumes/MacBackup/Data";
console.log(my_folder);
//Object
var name ={first:"Nam",last:"Nguyen"};
var book ={name:"Node.js", author:name};
console.log(book.name);
console.log(book.price);
book.price =100;
console.log(book.price);
name.first="Nguyen";
console.log(book.author);