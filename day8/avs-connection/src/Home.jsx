import { useEffect } from "react"
import { useState } from "react"
import { deleteApi, readApi } from "./API"

export const Dashboard=()=>{
    const[records,setRecords] = useState([])
    const callReadApi = async()=> {
        const temp = await readApi()
        setRecords(temp)
    }
    useEffect(()=>callReadApi,[])
    const performDelete=async(tid)=>{
        await deleteApi(tid)
        await callReadApi()
    }
    return(
        <>
            <table border={'10px'}>
                <thead>
                    <tr>
                        <th>Technology</th><th>Vendor</th>
                        <th>Resource Person</th>
                        <th>Perform</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((each)=>(
                            <tr>
                                <td>{each.technology}</td>
                                <td>{each.vendor}</td>
                                <td>{each.expertName}</td>
                                <td>
                                    <button onClick={()=>performDelete(each.id)}>Discontinue</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}