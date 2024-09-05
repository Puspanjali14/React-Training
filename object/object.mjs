/* let ar1=["puspanjali",false, 30]
array has value
where as object and value with information
*/

//define object

let info={
    name: "puspanjali", //property
    isMarried: false, //key,value
    age: 30,
};

//property=key+value
//get object element
console.log(info);
console.log(info.name);
console.log(info.isMarried);
console.log(info.age);


//change object element
info.isMarried=true; 
console.log(info);

//add new element
info.address="brt";
console.log(info);

//delete isMarried field
delete info.isMarried;
console.log(info);




let address ={
    city:"biratnagar",
    province:1,
    municipality:"biratnagar"
}
console.log(address);