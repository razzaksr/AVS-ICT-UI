import { use, useEffect, useState } from "react"

export const Sender=()=>{
    const[insurance,setInsurance] = useState({
        "insurar":"Razak Mohamed",
        "type":"Vehicle",
        "idv":8956.4
    })
    return(
        <>
            <h1>{insurance.insurar}</h1>
            <h3>{insurance.type}</h3>
            <h3>{insurance.idv}</h3>
            <Recept cost={insurance.idv} />
            {/* <Surveyor cost={insurance.idv} /> */}
            <Surveyor obj={setInsurance} />
        </>
    )
}
export const Surveyor = ({obj}) =>{
    useEffect(()=>{
        // cost+=0.50
        obj({
            "insurar":"Sabarinathan",
            "idv":929999.5,
            "type":"Health"
        })
    },[])
    return(
        <>
            <h1>Surveyor upated the insurance {obj.idv}</h1>
        </>
    )
}
export const Recept=({cost})=>{
    return(
        <>
            <h1>Vehicle Insurrance IDV Cost {cost}</h1>
        </>
    )
}