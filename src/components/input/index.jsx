import React from "react";
import { Input, InputContainer } from "./styles";

const InputPass = ({value, setValue, description}) => {
    return (
        <InputContainer>
        <label htmlFor={description}>{description}</label>
        <Input type="checkbox" checked={value} id={description} onChange={() => setValue(!value)} />
        </InputContainer>
    )
}

export default InputPass;