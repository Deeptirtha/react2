import "./index.css"
function Card(props){
    return (<div className="size">
        <img src={props.link} alt="" className="img"/>
        <h2 className="hot">{props.title}</h2>
     
        <h1 className="name">{props.name}</h1>
        <a href={props.render} ><button className="btn">Watch Now</button></a>
    </div>)}

    export default Card