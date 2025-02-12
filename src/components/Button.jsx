export default function Button({name,click}){
    return(
        <button id={name} onClick={click}>{name}</button>
    )
}