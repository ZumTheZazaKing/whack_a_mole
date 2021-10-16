export function Mole(props){
    return (<div className="mole">
            <h2 className="hidden" onClick={e => props.bonk(e)}>Mole</h2>
    </div>)
}