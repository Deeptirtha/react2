import React from "react"
import {useState ,useEffect}  from "react"
 
function Product(){
const [a,seta]=useState(0)
const [b,setb]=useState(100)

useEffect(()=>{
    document.title=`Inc ${a} dec ${b}`
})

    return(
        <div><h1>Product</h1>
        <p onClick={()=>seta(a+1)}>count Increse--{a}</p>
        <p onClick={()=>setb(b-1)}>count Decrese--{b}</p>
        <a href="/">Home</a>
    </div>
    )
}
export default Product