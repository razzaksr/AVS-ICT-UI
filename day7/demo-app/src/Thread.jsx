import { useEffect, useState } from "react"

export const DeamonThread = () => {
    const trainings = ["Microservice","AI Engineer",
        "GenAI Developer","SDE in Testing",
        "Python Developer","SAP"]
    const[track,setTrack]=useState([])
    const[isEmpty,setIsEmpty]=useState(false)
    // while loading this component
    // useEffect(()=>{
    //     setTrack(trainings)
    // },[])
    // whenever changes occured in isEmpty state reload 
    useEffect(()=>{
        setTrack(trainings)
        setIsEmpty(false)
    },[isEmpty])
    const remove = (event)=>{
        var temp =track.filter((exists)=>{
            return exists!=event.target.textContent
        })
        setTrack(temp)
        if(temp.length==0)
            setIsEmpty(true)
    }
    return(
        <>
            <h1>Current Trainings</h1>
            <ol>
                {
                    track.map((skill)=>(
                        <li onClick={remove}>
                            {skill}
                        </li> 
                    ))
                }
            </ol>
        </>
    )
}