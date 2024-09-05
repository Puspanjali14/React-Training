import React from 'react'

const LearnMap2 = () => {

        let users=[
        {name:"Puspanjali",
        address:"brt",
        email:"neupanepuspanjali88@gmail.com",
        password:"yogesh890"},
        {
        name:"Yogesh",
        address:"brt",
        email:"bhattaraiyogesh633@gmail.com",
        password:"puspa890"
        }
        
    ]
  return (
    <div>
            {
    users.map((value,i)=>{
        return(
            <div>
                <p>Name is {value.name}</p>
                <p>address is {value.address}</p>
                <p>quantity is {value.email}</p>
                <p>password is {value.password}</p>
            </div>
        )
    })
}


      
    </div>
  )
}

export default LearnMap2



// import React from 'react'

// const LearnMap2 = () => {
//     let users=[
//         {name:"Puspanjali",
//         address:"brt",
//         email:"neupanepuspanjali88@gmail.com",
//         password:"yogesh890"},
//         {
//         name:"Yogesh",
//         address:"brt",
//         email:"bhattaraiyogesh633@gmail.com",
//         password:"puspa890"
//         }
        
//     ]
//   return(
//    <div>

// }

// export default LearnMap2
