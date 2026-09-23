const url = "http://localhost:3000/trainings"

export const readApi = async() => {
    const collected = await fetch(`${url}/`)
    return collected.json()
}

export const deleteApi = async(tid) => {
    const res = await fetch(`${url}/${tid}`,{method:"delete"})
    return res.ok
}