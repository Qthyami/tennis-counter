import React from 'react';
import s from "./App.module.css";
import {Button} from "@material-ui/core";
type StartMessagePropsType={
    EnterMessage:(value:boolean)=>void
}
export const StartMessage = (props:StartMessagePropsType) => {
    const buttonHandler=()=>{
        props.EnterMessage(false)
    }
    return (
        <>
            <h2 style={{ color: "white"}}>Заполните все поля и наша программа телепатически рассчитает сколько у Вас лишних денег
                ✍(◔◡◔)</h2>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}> < Button
                onClick={buttonHandler}
                variant="contained"
                size="large"

                style={{ color: "white"}}

            >
                Уже бегу
            </Button>

        </div>
        </>
    );
};

