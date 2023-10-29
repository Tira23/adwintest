import React, {Dispatch, FC, SetStateAction} from 'react';
import * as style from './Textarea.style'
import * as styleLable from '../Input/Input.style'

interface ITextareaProps {
    width: number,
    height: number,
    text: string,
    maxlength?: number,
    minLength?: number,
    onChange: Dispatch<SetStateAction<string>>
}


const Textarea: FC<ITextareaProps> = ({minLength, onChange, width, height, text, maxlength}) => {
    return (
        <styleLable.Label>{text}
            <style.Textarea onChange={(e) => onChange(e.target.value)} width={width} height={height}
                            maxLength={maxlength} minLength={minLength}/>
        </styleLable.Label>
    );
};

export default Textarea;
