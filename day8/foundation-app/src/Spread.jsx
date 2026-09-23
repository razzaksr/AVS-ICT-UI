import { useState } from "react"

export const Modification=()=>{
    const[insurance,setInsurance] = useState({
        "insurar":"Razak Mohamed",
        "type":"Vehicle",
        "idv":8956.4
    })
    const handle=()=>{
        setInsurance((exists)=>{
            return{
                ...exists,
                "idv":insurance.idv-(insurance.idv*0.050)
            }
        })
    }
    return(
        <>
            <h1>{insurance.insurar}</h1>
            <h3>{insurance.type}</h3>
            <h3>{insurance.idv}</h3>
            <button onClick={handle}>Update Cost</button>
        </>
    )
}