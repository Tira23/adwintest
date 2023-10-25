import React from 'react';
import Button from "./components/buttons/Button/Button";
import ButtonFilter from "./components/buttons/Filter/Filter";
import imgDW from "./img/IconDownWhite.svg"
import imgDB from "./img/IconDownBlue.svg"
import imgUW from "./img/IconUpWhite.svg"
import imgUB from "./img/IconUpBlue.svg"
import Note from "./components/Note/Note";


function App() {


    return (
        <>
            <header>
                <Button color="black" text="Черная"/>
            </header>
            <main>
                <Button color="white" text="белая"/>
            </main>
            <Button text="круглая" color="white" big={true}/>
            <Note title="asfsdf" text="sdfsdf"/>
            <footer>
                <ButtonFilter color="blue" theme={imgDW} newOld={true}/>
                <ButtonFilter color="grey" theme={imgDB}/>
                <ButtonFilter color="blue" theme={imgUW}/>
                <ButtonFilter color="grey" theme={imgUB} newOld={true}/>
            </footer>
        </>
    );
}

export default App;
