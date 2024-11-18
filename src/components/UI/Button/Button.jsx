import React, { useState } from "react";
import './Button.css'

function Button(props) {
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const styles = {
        background: isHover ?  'gray' : props.background,
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        color: isHover ? 'black' : 'color'
    }

    return (
        <button
            onClick={props.clicked}
            style={styles}
            className='Button'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.text}
        </button>
    )
}

export default Button