import logo from './assets/hero.png'
import './Photos.css'
export const Photos = () => {
    // internal css
    const headerStyle = {
        "textShadow":"10px 10px 2px grey",
        "color":"blue"
    }
    return(
        <>
            <img src={logo} 
                style={{width:'400px',height:'300px'}} />
            <h1 style={headerStyle}>User defined Component</h1>
            <p>React Front end library</p>
        </>
    )
}