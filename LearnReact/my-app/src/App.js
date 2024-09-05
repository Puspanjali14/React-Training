import Address from "./Component/Address"
import LearnMap from "./Component/LearnMap";
import LearnMap2 from "./Component/LearnMap2";
import LearnUseState from "./Component/LearnUseState";
import LearnUseState2 from "./Component/LearnUseState2";
import MyNavLinks from "./Component/MyNavLinks";
import MyRoutes from "./Component/MyRoutes";


export let App=({name,address,age,isMarried})=>{
  let num=12;

  let a= num>50?"yes":"no";
  console.log(a)
 


  return(
     <div>
      {/* <img src="./favicon.ico"></img> */}
      
  
      {/* name is {name}<br></br> */}
      {/* address is{address}<br></br> */}
      {/* isMarried is {isMarried ===false?"yes":"no"}<br></br> */}
    
      {/* age is {age}<br></br> */}
      {/* <Address city="Biratnagar" exactlocation="Roadsesh"></Address> */}
       {/* <LearnMap2></LearnMap2> */}
    
      <MyNavLinks></MyNavLinks>
      <MyRoutes></MyRoutes>

  </div>
  )
}
