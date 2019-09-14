import React, { useState } from 'react';


const ComplexState = (props) => {
    // const [left, setLeft] = useState(0)// returns [state //=0,setState]
    // const [right, setRight] = useState(0)

    const [clicks, setClicks] = useState({ left: 0, right: 0 }) //returns an array [state//defaultValue is { left: 0, right: 0 } ,setState]
    const handleLeftClick = () => {

        setClicks({ ...clicks, left: clicks.left + 1 })
    }

    const handleRightClick = () => {

        setClicks({ ...clicks, right: clicks.right + 1 })
    }

    return (
        <div>
            <div>
                {clicks.left}
                <button onClick={handleLeftClick}>
                    left
          </button>
                <button onClick={handleRightClick}>
                    right
          </button>
                {clicks.right}
            </div>
        </div>
    )
}
export default ComplexState;