import React, { useState } from "react";
import './Modal.css'
import Backdrop from "../Backdrop/Backdrop";
import Button from '../Button/Button';

function Modal(props) {

    return (
        <>
            <Backdrop
                show={props.show}
                clicked={props.closed}
            />
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <div className="title_block">
                    <h2 className="title_block_text">{props.title}</h2>
                    <Button
                        width='30px'
                        height='30px'
                        text='X'
                        background='transparent'
                        borderRadius='10px'
                        clicked={props.clicked}
                    />
                </div>
                <div className="children_block">
                    {props.children}
                    <div className="children_block_btn">
                        {props.arrayBtn.map((item) => {
                            return (
                                <Button
                                    key={item.label}
                                    clicked={item.clicked}
                                    width='100px'
                                    height='20px'
                                    text={item.label}
                                />

                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal