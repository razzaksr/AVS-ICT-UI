export const reachIn = (capture)=> {
    capture.target.innerHTML = "Mouse Reached the Space"
    capture.target.style.backgroundColor = "grey"
}
export const reachOut = (capture)=> {
    capture.target.innerHTML = "Mouse Left the Space"
    capture.target.style.backgroundColor = "black"
}