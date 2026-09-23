import { useContext, useMemo } from "react"
import { SkillContext } from "./HooksIntro"

export const Results = () => {
    const received = useContext(SkillContext)
    return(
        <>
            <h1>Search Results of {received} would appear here</h1>
        </>
    )
}
// actual filteration
export const ViewSet = () =>{
    const companies = [
        {"name":"Cognizant","pre":"Java,Python","ctc":4.5},
        {"name":"Capgemini","pre":"PHP,Selenium","ctc":4.5},
        {"name":"IBM","pre":"SpringBoot,Jython","ctc":4.5},
        {"name":"Accenture","pre":"FastAPI,Javalin","ctc":4.5},
        {"name":"HP","pre":"Swift,React","ctc":4.5},
        {"name":"Amazon","pre":"RasberyPI","ctc":4.5}
    ]
    const required = useContext(SkillContext)
    const filteredOrg = useMemo(()=>{
        var temp = []
        companies.forEach((org)=>{
            if(required!=""){
                var curSkill = org.pre.split(",")
                // return org.pre.split(",").
                for(var ind=0;ind<curSkill.length;ind++){
                    if(curSkill[ind].toUpperCase().startsWith(required.toUpperCase()))
                        temp.push(org)
                }
            }else{
                temp=companies
            }
        })
        return temp
    },[required])
    return(
        <>
            {
                filteredOrg.map((org)=>(
                    <ul>
                        <li>{org.name}</li>
                        <li>{org.pre}</li>
                        <li>{org.ctc}</li>
                    </ul>
                ))
            }
        </>
    )   
}