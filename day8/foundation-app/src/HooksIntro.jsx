import { createContext, useRef, useState } from "react"
import { Results, ViewSet } from "./DemoCont";

// campus connection search companies based on skill set

export const SkillContext = createContext();

export const SeachBar=()=>{
    const skillRef = useRef()
    const[seek,setSeek] = useState("")
    // const handleChange=(e)=>{
    //     setSeek(e.target.value)
    // }
    const handleChange=()=>{
        setSeek(skillRef.current.value)
    }
    return(
        <>
            <SkillContext.Provider value={seek}>
                <input ref={skillRef} onChange={handleChange} 
                    placeholder="search company"/>
                <p>{seek}</p>
                <Results />
                <ViewSet/>
            </SkillContext.Provider>
        </>
    )
}
