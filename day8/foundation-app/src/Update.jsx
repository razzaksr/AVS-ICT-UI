import { useState } from "react"

export const Alter=()=>{
    const[insurance,setInsurance] = useState({
        "insurar":"Razak Mohamed",
        "type":"Vehicle",
        "idv":8956.4
    })
    const handleInput=(eve)=>{
        const{name,value}=eve.target
        setInsurance((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    return(
        <>
            <input type="text" onChange={handleInput} value={insurance.insurar} name="insurar"/>
            <input type="text" onChange={handleInput} value={insurance.type} name="type"/>
            <input type="text" onChange={handleInput} value={insurance.idv} name="idv"/>
            <div>
                <h1>{insurance.insurar}</h1>
                <h3>{insurance.type}</h3>
                <h3>{insurance.idv}</h3>
            </div>
        </>
    )
}