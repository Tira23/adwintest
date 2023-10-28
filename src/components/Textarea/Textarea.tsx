import React, {FC} from 'react';
import * as style from './Textarea.style'
import * as styleLable from '../Input/Input.style'

interface ITextareaProps{
    width: number,
    height: number,
    text:string
}


const Textarea:FC<ITextareaProps> = ({width,height,text}) => {
    return (
        <styleLable.Label>{text}
            <style.Textarea  width={width} height={height}/>
        </styleLable.Label>
    );
};

export default Textarea;
