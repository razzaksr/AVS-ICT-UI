import { reachIn, reachOut } from "./EventPerform"

export const Perform = () => {
    const bStyle = {
        "borderRadius":"20px",
        "backgroundColor":"black",
        "color":"yellow",
        "fontSize":"14px",
        "padding":"10px"
    }
    // internal event
    const reform = (capture)=> {
        capture.target.innerHTML = "Double Click Event"
        capture.target.style.backgroundColor = "black"
    }
    return(
        <>
            <button onMouseLeave={reachOut} onMouseEnter={reachIn} onDoubleClick={reform} onClick={(e)=>{
                e.target.innerHTML = "Clicked"
                e.target.style.backgroundColor="green"
            }} style={bStyle}>No Event</button>
        </>
    )
}