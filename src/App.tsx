import React from 'react';
import Button from "./components/buttons/Button/Button";
import ButtonFilter from "./components/buttons/Filter/Filter";
import imgDW from "./img/IconDownWhite.svg"
import imgDB from "./img/IconDownBlue.svg"
import imgUW from "./img/IconUpWhite.svg"
import imgUB from "./img/IconUpBlue.svg"
import logo from "./img/Logo.svg"
import Note from "./components/Note/Note";
import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Title from "./components/Title/Title";


function App() {


    return (
        <Section>
            <Header>
                <img alt="logo" src={logo}/>
                <Button text="написать" color="black" textColor="#FFF"/>
            </Header>

            <Main>
                <Title text="Мой дневничок"/>
                <Button color="white" text="белая" textColor="#fff"/>
            </Main>
            <Button text="круглая" color="white" big={true} textColor="black"/>
            <Note title="asfsdf" text="sdfsdf"/>
            <footer>
                <ButtonFilter color="blue" theme={imgDW} newOld={true}/>
                <ButtonFilter color="grey" theme={imgDB}/>
                <ButtonFilter color="blue" theme={imgUW}/>
                <ButtonFilter color="grey" theme={imgUB} newOld={true}/>
            </footer>
        </Section>
    );
}

export default App;
