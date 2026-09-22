export const Projects = () => {
    return(
        <ol>
            <li>Zealous proFoundry</li>
            <li>Zealous electroCare</li>
            <li>Z-360</li>
        </ol>
    )
}
const Items = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Expert</th><th>Role</th><th>Team</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Razak Mohamed</td>
                    <td>Architect</td>
                    <td>ICT Academy</td>
                </tr>
                <tr>
                    <td>Meharaj</td>
                    <td>Project Manager</td>
                    <td>Rifa Enterprises</td>
                </tr>
                <tr>
                    <td>Annamalai</td>
                    <td>Head - Talent aquisation</td>
                    <td>Zoho</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Items
// export {Component1,Component2}
// export {Projects}
// whenever any body import Tabs.jsx they will get 
// Items Components by default