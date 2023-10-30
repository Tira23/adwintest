import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import Button from "./components/buttons/Button/Button";
import ButtonFilter from "./components/buttons/Filter/Filter";
import imgDW from "./img/IconDownWhite.svg"
import imgDB from "./img/IconDownBlue.svg"
import imgUW from "./img/IconUpWhite.svg"
import imgUB from "./img/IconUpBlue.svg"
import logo from "./img/Logo.svg"
import arrowLeft from "./img/arrowLeft.svg"
import arrowRight from "./img/arrowRight.svg"

import Note from "./components/Note/Note";
import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Title from "./components/Title/Title";
import DivRow from "./components/Divs/DivRow/DivRow";
import Footer from "./components/Footer/Footer";
import Text from "./components/Text/Text";
import Modal from "./components/Modal/Modal";
import Overlay from "./components/Screen/Overlay";
import {INote} from "./interface";
import {GetFromLocal} from "./GetFromLocal/GetFromLocal";
import {InitialNotes} from "./InitialNotes";

function App() {
    const [open, setOpen] = useState(false);
    const [notes, setNotes] = useState<INote[]>(GetFromLocal || InitialNotes);
    const [page, setPage] = useState(1);
    const [countElements, setCountElements] = useState<number>(6);
    const [pages, setPages] = useState<ReactNode[]>([<Text key={1} text="1" size={22}/>]);
    const [sorted, setSorted] = useState(true);

    const returnToTop = () => {
        const el = document.getElementById('title');
        el!.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    const handleChangeCount = () => {
        setCountElements(prev => prev + 3)

    }
    const handlePage = (num: number) => {
        setPage(num)
    }
    const handleChangePage = (num: number) => {
        setPage(prev => {
            const current = prev + num
            if (!current) {
                return 1
            }
            return current
        })
    }

    useEffect(() => {
        return () => {
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    }, [notes])

    const sortNote2 = useMemo(() => {
        let curNote
        if (sorted) {
            curNote = notes.sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();

                return dateA - dateB;
            })
        } else {
            curNote = notes.sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();

                return dateB - dateA;
            })
        }
        return curNote
    }, [notes, sorted]);

    const filter: INote[] = useMemo(() => {
        let currentCount = countElements
        let sorted2 = sorted
        let currentStart = currentCount * page - currentCount
        let currentEnd = currentCount * page
        if (currentEnd > notes.length) {
            currentEnd = notes.length
            currentStart = notes.length - currentCount
        }
        return sortNote2.slice(currentStart, currentEnd)
    }, [countElements, notes.length, page, sortNote2, sorted]);

    const togglePopup = () => {
        setOpen(prev => !prev)
    }
    const createNote = (note: INote) => {
        setNotes(prev => [...prev, note])
    }


    useEffect(() => {
        const currentPages = Math.floor(notes.length / countElements)
        const newArr = []
        for (let i = 0; i <= currentPages; i++) {
            newArr.push(<Text onClick={() => handlePage(i + 1)} key={i} text={i + 1} size={22}/>)
        }
        setPages(newArr)
    }, [countElements, notes.length]);
    return (
        <>
            {
                open &&
                <>
                    <Overlay togglePopup={togglePopup}>
                        <Modal togglePopup={togglePopup} createNote={createNote}/>
                    </Overlay>

                </>
            }
            <Section flex="column" flexDir="column" margin="0 auto" width={1920}>
                <Header>
                    <img id='title' alt="logo" src={logo}/>
                    <Button onClick={togglePopup} text="написать" color="black" textColor="#FFF"/>
                </Header>
                <Main>
                    <DivRow margin="0 0 70px 0" alignItems="end">
                        <Title size="lage" text="Мой дневничок"/>
                        <DivRow gap="10px">
                            {
                                sorted ? (
                                    <>
                                        <ButtonFilter onClick={() => setSorted(() => true)} color="blue" image={imgDW}
                                                      newOld={true}/>
                                        <ButtonFilter onClick={() => setSorted(() => false)} color="grey"
                                                      image={imgUB}/>
                                    </>
                                ) : (
                                    <>
                                        <ButtonFilter onClick={() => setSorted(() => true)} color="grey" image={imgDB}
                                                      newOld={true}/>
                                        <ButtonFilter onClick={() => setSorted(() => false)} color="blue"
                                                      image={imgUW}/>
                                    </>
                                )
                            }
                        </DivRow>
                    </DivRow>
                    <Section flexDir="row" flex="row" justify="space-around">
                        {
                            filter.map((e, i) => <Note key={i} title={e.title} text={e.text} date={e.date}/>)
                        }
                        <Button onClick={handleChangeCount} text="Показать больше" color="white" size="White"
                                textColor="black"
                                margin="30px 0 0 0"/>
                        <DivRow margin="60px auto 180px" justify="space-around" gap="126px" alignItems="center">
                            <img onClick={() => handleChangePage(-1)} style={{cursor: "pointer"}} alt='arrowLeft'
                                 src={arrowLeft}/>
                            <DivRow gap="22px">
                                {
                                    pages.map(e => e)
                                }
                            </DivRow>
                            <img onClick={() => handleChangePage(1)} style={{cursor: "pointer"}} alt='arrowRight'
                                 src={arrowRight}/>

                        </DivRow>
                    </Section>
                </Main>
                <Footer padding="25px 40px" position="relative">
                    <Text text="Мой Дневничок" size={18} color="white"/>
                    <Button onClick={returnToTop} text="наверх" color="#88A1DE" textColor="black" position="absolute"
                            right={40} bottom={35}
                            size="Up"/>
                </Footer>
            </Section>
        </>
    );
}

export default App;
