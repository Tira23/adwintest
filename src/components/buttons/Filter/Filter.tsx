import React from "react";
import * as styled from "./Filter.style"
import DivRow from "../../Divs/DivRow/DivRow";
import Text from "../../Text/Text";

interface IFilter {
    color: "grey" | "blue"
    image: string
    newOld?: boolean
}

const ButtonFilter = ({newOld, image, color}: IFilter) => {
    return (
        <styled.Filter color={color} >
            <DivRow>
                <img alt="arrow" src={image}/>
                <Text text={newOld ? "Сначала новые" : "Сначала старые"} size={15} letter={.5}/>
            </DivRow>
        </styled.Filter>
    )
}

export default ButtonFilter
