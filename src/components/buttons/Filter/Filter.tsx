import React from "react";
import * as styled from "./Filter.style"
interface IFilter {
    color: "grey" | "blue"
    theme: string
    newOld?: boolean
}
const ButtonFilter = ({newOld, theme, color}:IFilter) => {
    return(
        <styled.Filter color={color}>
            <div>
                <img alt="arrow" src={theme}/>
                <span>
                    {newOld ? "Сначала новые" : "Сначала старые"}
                </span>
            </div>
        </styled.Filter>
    )
}

export default ButtonFilter
