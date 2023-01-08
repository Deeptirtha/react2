import { useParams } from "react-router-dom"

function Payment(){
    const price=useParams()
    return(
        <div><h1>payment--{price.price}</h1>
        <a href="/">Home</a></div>

    )
}
export default Payment