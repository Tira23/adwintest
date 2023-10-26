import React from 'react';
import calendar from "../../img/calendar.svg"
import watch from "../../img/watch.svg"
import * as styled from "./Note.style"
import DivColum from "../Divs/DivColum/DivColum";
import DivRow from "../Divs/DivRow/DivRow";
import * as style from "../Divs/Div.style";
import Text from "../Text/Text";
import Title from "../Title/Title"

interface INote {
    title: string,
    text: string,
    date?: Date
}

const Note = ({}: INote) => {
    const title = 'Что-то не такое важное, но тоже интересное'
    const text = 'Идейные соображения высшего порядка, а также сложившаяся структура организации требуют определения и уточнения модели развития. Значимость этих проблем настолько очевидна, что сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий.'
    const date = Date.now()
    return (
        <styled.Note>
            <DivColum height="100%">
                <style.DivColumBlock>
                    <Title text={title}></Title>
                    <Text text={text}></Text>
                </style.DivColumBlock>
                <DivRow>
                    <DivRow>
                        <img alt="Date" src={calendar}/>
                        <Text color="#88A1DE" margin="0 0 0 13px" text="26.10.2023"></Text>
                    </DivRow>
                    <DivRow>
                        <img alt="Date" src={watch}/>
                        <Text color="#88A1DE" margin="0 0 0 13px" text="15:50"></Text>
                    </DivRow>
                </DivRow>
            </DivColum>
        </styled.Note>
    );
};

export default Note;
