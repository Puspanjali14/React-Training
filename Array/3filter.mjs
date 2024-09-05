let age=[10,20,30,11,13];
let age1 = age.filter(
    (value, i)=> {
        if (value%2===0){

return true;
    }
    else{
        return false;
    }
}
);
console.log(age1);

/*
filter 
[1,2,3]=[1]
[1,2,3]=[10,1]******* we can not use filter
[1,2,3]=[1]
it is used to filter Element

Map
[1,2,3]="123" not
[1,2,3]=[2,4,6,10] not
[1,2,3]=[3,6,9]

input array , output array, input length and output  length are same.it is used to manipulate element 
*/