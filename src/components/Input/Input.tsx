import React, {FC} from 'react';
import * as style from './Input.style'

interface IInputProps{
    width: number,
    height: number,
    text:string,
    type: string,
}

const Input:FC<IInputProps> = ({type,width,height, text}) => {
    return (
        <style.Label>{text}
            <style.Input type={type} width={width} height={height} />
        </style.Label>
    );
};

export default Input;
