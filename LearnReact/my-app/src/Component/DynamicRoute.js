import React from 'react'
import { useParams,useNavigate} from "react-router-dom"

const DynamicRoute = () => {
    let params = useParams(); //useParams() give dynamic params in object
    console.log(params); 

    let navigate=useNavigate();
  return (
    <div>
        <button
            onClick={()=>{
                navigate("/home")

            }}
            >
                click to go Home
        </button><br></br>
        <button
            onClick={()=>{
                navigate("/about")

            }}
            >
                click to go about
        </button>
        <button
            onClick={()=>{
                navigate("/contact")

            }}
            >
                click to go contact
        </button>
<br></br>
        <button
            onClick={()=>{
                navigate("/college")

            }}
            >
                click to go college
        </button>
        <br></br>
        <button
            onClick={()=>{
                navigate("/productcreate")

            }}
            >
                click to go ProductCreate
        </button><br></br>
        <button
            onClick={()=>{
                navigate("/product")

            }}
            >
                click to go product
        </button>
    </div>
  )
}

export default DynamicRoute

            
