import React from "react";
import { InputContainer } from "../input/styles";


const InputPasswordLen = ({len, setLen}) => {
    return (
        <InputContainer>
        <label>Tamanho da senha</label>
        <input type="range" min="1" max="25" step="1" onChange={(e) => setLen(e.target.value)}></input>
        <span>{len}</span>
        </InputContainer>
    )
}

export default InputPasswordLen