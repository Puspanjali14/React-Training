let num=[1,2,3];
let num1=num.map((value,i)=>{
    let result= value*2;
    return result;
});
console.log(num1)
let num2=[1,2,3]
let num3=num2.map(
    (value,i)=>{
        let result1=value+10;
        return result1;
    }
);
console.log(num3)


let name=["yogesh","Puspa"];
let name1=name.map(
    (value,i)=>{
        let result2=value+" Bhattarai";
        return result2;

    }
);
console.log(name1)


let num4=[1,2,3]
let num5=num.map(
    (value, i)=>{
        let result3=value*i;
        return result3;
    }
);
console.log(num5)

 