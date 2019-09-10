import React, { useState } from 'react';


const ComplexState = (props) => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)

    const [clicks, setClicks] = useState({ left: 0, right: 0 })
    const handleLeftClick = () => {
        const newClick = { left: clicks.left + 1, right: clicks.right }
        setClicks(newClick)
    }

    const handleRightClick = () => {
        const newClick = { left: clicks.left, right: clicks.right + 1 }
        setClicks(newClick)
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