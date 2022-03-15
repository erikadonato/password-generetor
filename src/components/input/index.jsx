import React from "react";
import { Input, InputContainer } from "./styles";

const InputPass = ({description}) => {
    return (
        <InputContainer>
        <label for={description}>{description}</label>
        <Input type="checkbox" id={description} />
        </InputContainer>
    )
}

export default InputPass;