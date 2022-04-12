import React from "react";
import { InputContainer } from "../input/styles";


const InputPasswordLen = ({len, setLen}) => {
    return (
        <InputContainer>
        <label>Tamanho da senha</label>
        <input type="range" min="8" max="24" step="1" onChange={(e) => setLen(e.target.value)}></input>
        <span>{len}</span>
        </InputContainer>
    )
}

export default InputPasswordLen