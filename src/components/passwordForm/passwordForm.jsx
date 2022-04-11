import React, { useEffect, useState } from "react";
import { Button } from "../button/styles";
import InputPass from "../input";
import InputPasswordLen from "../inputPasswordLength";
import { Container, PassForm } from "./styles";

const PasswordForm = () => {
    const [len, setLen] = useState();
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [generate, setGenerate] = useState(false); 


    useEffect(() => {

    }, [generate])


    return (
        <Container>
            <PassForm>
                <InputPasswordLen len={len} setLen={setLen} />
                <InputPass  upperCase={upperCase} setUpperCase={setUpperCase} description={'Letras Maiúsculas'} />
                <InputPass  lowerCase={lowerCase} setLowerCase={setLowerCase} description={'Letras Minúscula'} />
                <InputPass symbols={symbols} setSymbols={setSymbols} description={'Símbolos'} />
                <InputPass numbers={numbers} setNumbers={setNumbers} description={'Números'} />
                <br />
                <Button onClick={() => setGenerate(true)}>Gerar !</Button>
            </PassForm>
        </Container>
    )
}

export default PasswordForm;