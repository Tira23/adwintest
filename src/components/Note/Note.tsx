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
    date: string
    margin?: string
}

const Note = ({margin, text, title, date}: INote) => {
    const newDate = new Date(date)
    const dateToMonth = newDate.toLocaleDateString()
    const dateToTimeMinutes = newDate.getMinutes()
    const dateToTimeHours = newDate.getHours()

    return (
        <styled.Note margin={margin}>
            <DivColum height="100%">
                <style.DivColumBlock>
                    <Title text={title}></Title>
                    <Text text={text} lineheight={170}></Text>
                </style.DivColumBlock>
                <DivRow>
                    <DivRow alignItems="center">
                        <img alt="Date" src={calendar}/>
                        <Text color="#88A1DE" margin="0 0 0 13px" text={dateToMonth}></Text>
                    </DivRow>
                    <DivRow alignItems="center">
                        <img alt="Date" src={watch}/>
                        <Text color="#88A1DE" margin="0 0 0 13px"
                              text={`${dateToTimeHours}:${dateToTimeMinutes}`}></Text>
                    </DivRow>
                </DivRow>
            </DivColum>
        </styled.Note>
    );
};

export default Note;
