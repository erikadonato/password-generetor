import React, { useState } from "react";
import { Button } from "../button/styles";
import InputPass from "../input";
import InputPasswordLen from "../inputPasswordLength";
import PasswordResult from "../passwordResult";
import { Container, PassForm, ButtonSpace } from "./styles";
import { getPassword } from "../../utils/passwordGenerator"

const PasswordForm = () => {
    const [len, setLen] = useState(24);
    const [upperCase, setUpperCase] = useState(true);
    const [lowerCase, setLowerCase] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [passWord, setPassWord] = useState(null); 

    function handleGenerate(){
        setPassWord(getPassword({len, upperCase, lowerCase, symbols, numbers}))
    }


    return (
        <Container>
            <PasswordResult password={passWord}  />
            <PassForm>
                <InputPasswordLen len={len} setLen={setLen} />
                <InputPass value={upperCase} setValue={setUpperCase} description={'Letras Maiúsculas'} />
                <InputPass value={lowerCase} setValue={setLowerCase} description={'Letras Minúscula'} />
                <InputPass value={symbols} setValue={setSymbols} description={'Símbolos'} />
                <InputPass value={numbers} setValue={setNumbers} description={'Números'} />
                <br />
                <ButtonSpace>
                <Button onClick={() => handleGenerate()}>Gerar !</Button>
                {passWord !== null ?
                    <Button onClick={() => {}}>Copiar Senha</Button> 
                : null}
                </ButtonSpace>
            </PassForm>
        </Container>
    )
}

export default PasswordForm;