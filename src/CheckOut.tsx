import React from 'react';

type CheckOutPropsType={
    result:number,
    name:string
}
export const CheckOut = (props:CheckOutPropsType) => {
    const resultStyle = {
        fontSize: '40px', // Установите желаемый размер шрифта
        fontWeight: 'bold', // Жирный стиль
        color: 'red', // Цвет текста
        // Другие стили, если необходимо
    };

    return (
        <div style={{ color: 'white' }}>
            <h1>
                {props.name}, ЧМАФФФКИ!💋❤ С Вас, пожалуйста, <span style={resultStyle}>{props.result}</span> белорусских деняк😍!!!!!!!
            </h1>
        </div>
    );
};