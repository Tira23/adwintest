import React, {FC, useState} from 'react';
import DivRow from "../Divs/DivRow/DivRow";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Section from "../Section/Section";
import DivColum from "../Divs/DivColum/DivColum";
import Textarea from "../Textarea/Textarea";
import Button from "../buttons/Button/Button";
import close from "../../img/close.svg"
import {INote} from "../../interface";

interface IModalProps {
    togglePopup: () => void
    createNote: (note: INote) => void

}

const Modal: FC<IModalProps> = ({togglePopup, createNote}) => {


    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');


    const create = () => {
        const note: INote = {id: Date.now(), title, text, date}
        createNote(note);
        togglePopup()
    }

    return (
        <Section flex="modal" padding="50px 60px">
            <DivRow justify="end" togglePopup={togglePopup}>
                <img alt={'close'} src={close} width={28} height={28}/>
            </DivRow>
            <DivColum gap={45}>
                <Title size="small" text="Новая запись"/>
                <DivRow colum={true} gap="42">
                    <Input minLength={5} onChange={setTitle} type="text" text="Заголовок" width={526} height={80}
                           maxlength={200}/>
                    <Input onChange={setDate} type="datetime-local" text="Дата" width={526} height={80}/>
                </DivRow>
                <Textarea minLength={10} onChange={setText} text="Заметка" width={1094} height={166} maxlength={2000}/>
                <Button onClick={create} verysmall={true} width={533} text="Поделиться наболевшим" color="black"
                        textColor="white" />
            </DivColum>
        </Section>
    );
};

export default Modal;
