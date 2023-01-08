import React from "react"
import { useState } from "react"


function Count(){
const [a,seta]=useState(5)

return (<>

<h1>count--{a}</h1>
<button value={a} onClick={()=>seta(a+1)}>++++++</button>
<button value={a} onClick={()=>seta(a-1)}>------</button>
{(a%2===0)?"even":"odd"}
</>)


}
    
    export default Count  

