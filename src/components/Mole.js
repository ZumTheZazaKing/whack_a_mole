import { forwardRef } from "react"

export const Mole = forwardRef((props, ref) => {
    return (<div className="mole">
            <div ref={ref} className="inner hidden" onClick={e => props.bonk(e)}></div>
    </div>)
})