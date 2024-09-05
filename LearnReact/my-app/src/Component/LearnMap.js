import React from 'react'

const LearnMap = () => {
    let product=[
        {name:"laptop",price:10000,quantity:10},
        {name:"Mobile",price:1000,quantity:5},
        {name:"Tv",price:1500,quantity:3}
    ];
  return (
    <div>
    {
    product.map((value,i)=>{
        return(
            <div>
                <p>Name is {value.name}</p>
                <p>Price is {value.price}</p>
                <p>Quantity is {value.quantity}</p>
            </div>
        )
    })
}
    </div>
)
}


export default LearnMap
