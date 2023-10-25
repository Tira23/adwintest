import React from 'react';
import calendar from "../../img/calendar.svg"
import watch from "../../img/watch.svg"
import * as styled from "./Note.style"

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
        <styled.note>
            <h2>{title}</h2>
            <span>{text}</span>
            <div>
                <div>
                    <img alt="Date" src={calendar}/>
                    <span>26.10.2023</span>
                </div>
                <div>
                    <img alt="Date" src={watch}/>
                    <span>15:50</span></div>
            </div>
        </styled.note>
    );
};

export default Note;
