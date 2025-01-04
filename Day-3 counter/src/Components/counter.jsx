import { useState } from "react"

import Counter2 from "./counter2";
function Counter() {

    let [state, setState] = useState(0)
    let handleInc = () => {

        setState(state + 1);
        console.log(state);
    }
    let handleDec = () => {
        if (state <= 0) {
            
            return 0
            
        }
        setState(state - 1);
        console.log(state);
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            <h1>{state}</h1>
            <Counter2 het={state}></Counter2>
            <button onClick={handleDec}>-</button>

        </div>
    )

}
export default Counter