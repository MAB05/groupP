import MyComponent from "./Mycomponent"
import './Body.css' 
function Body(){
    return(
        <div className="Body">
        <div className="alcoholic">
            <a href="/">Alcholic </a>
            <a href="/about">No Alcholic </a>
            <a href="/posts">Random cocktail</a>

        </div>
        
        </div>
        
    )
}
export default Body