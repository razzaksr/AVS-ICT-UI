import { useState } from "react"

export const DemoStateHook = () => {
    const[content,setContent] = useState("Simple Button")
    const[decoration,setDecoration] = useState({
        "color":"white",
        "backgroundColor":"black"
    })
    const handleClick = () => {
        setContent("Clicked Once")
        setDecoration({
            "color":"white",
            "backgroundColor":"red"
        })
    }
    const handleReachIn = () => {
        setContent("Mouse Reached the Area")
        setDecoration({
            "color":"white",
            "backgroundColor":"yellow"
        })
    }
    return (
        <>
            <button 
                onClick={handleClick} 
                onMouseEnter={handleReachIn}
                style={decoration}>
                
                {content}
            
            </button>
        </>
    )
}