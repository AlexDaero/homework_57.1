import React from "react";
import './Backdrop.css'

function Backdrop(props) {
    return (
        <>
            {props.show
                ? <div
                    onClick={props.clicked}
                    className="Backdrop"
                />
                : null}
        </>
    )
}

export default Backdrop