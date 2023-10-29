import React, {ChangeEvent, Dispatch, FC, SetStateAction} from 'react';
import * as style from './Input.style'

interface IInputProps {
    width: number,
    height: number,
    text: string,
    type: string,
    maxlength?: number,
    onChange: Dispatch<SetStateAction<string>>,
    minLength?: number
}

const Input: FC<IInputProps> = ({minLength, onChange, type, width, height, text, maxlength}) => {
    switch (type) {
        case "Text":
            return (
                <style.Label>{text}
                    <style.Input onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                                 type={type}
                                 width={width}
                                 height={height}
                                 maxLength={maxlength}
                                 minLength={minLength}
                    />
                </style.Label>
            );
        default:
            return (
                <style.Label>{text}
                    <style.Input onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                                 type={type}
                                 width={width}
                                 height={height}
                                 maxLength={maxlength}
                    />
                </style.Label>
            );
    }

};

export default Input;
