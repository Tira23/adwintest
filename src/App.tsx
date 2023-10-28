import React, {useState, MouseEvent, useRef} from 'react';
import Button from "./components/buttons/Button/Button";
import Filter from "./components/buttons/Filter/Filter";
import imgDW from "./img/IconDownWhite.svg"
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


function App() {
    // const apiFetch = async () => {
    //     const res = await fetch("http://localhost:3001/")
    //     console.log(res)
    //     const data = await res.json()
    //     console.log(data)
    //     return
    // }
    // useEffect(() => {
    // apiFetch().then(r => console.log(r)).catch(console.log)
    // }, []);
    const [open, setOpen] = useState(false);
    const togglePopup = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            {
                open &&
                <>
                <Overlay togglePopup={togglePopup}>
                    <Modal togglePopup={togglePopup}/>
                </Overlay>

                </>
            }
            <Section flex="column" flexDir="column" margin="0 auto" width={1920}>

                <Header>
                    <img alt="logo" src={logo}/>
                    <Button togglePopup={togglePopup} text="написать" color="black" textColor="#FFF"/>
                </Header>
                <Main>
                    <DivRow margin="0 0 70px 0" alignItems="end">
                        <Title size="lage" text="Мой дневничок"/>
                        <DivRow gap="10px">
                            <Filter color="blue" image={imgDW} newOld={true}/>
                            <Filter color="grey" image={imgUB}/>
                        </DivRow>
                    </DivRow>
                    <Section flexDir="row" flex="row" justify="space-around">
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Note title="dfsdf" text="dsfdf"/>
                        <Button text="Показать больше" color="white" size="White" textColor="black"
                                margin="30px 0 0 0"/>
                        <DivRow margin="60px auto 180px" justify="space-around" gap="126px" alignItems="center">
                            <img alt='arrowLeft' src={arrowLeft}/>
                            <DivRow gap="22px">
                                <Text text="1" size={22}/>
                                <Text text="2" size={22}/>
                                <Text text="3" size={22}/>
                                <Text text="4" size={22}/>
                                <Text text="5" size={22}/>
                            </DivRow>
                            <img alt='arrowRight' src={arrowRight}/>

                        </DivRow>
                    </Section>
                </Main>
                <Footer padding="25px 40px" position="relative">
                    <Text text="Мой Дневничок" size={18} color="white"/>
                    <Button text="наверх" color="#88A1DE" textColor="black" position="absolute" right={40} bottom={35}
                            size="Up"/>
                </Footer>
            </Section>
        </>
    );
}

export default App;
