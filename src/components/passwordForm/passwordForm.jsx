import React, { useState } from "react";
import { Button } from "../button/styles";
import InputPass from "../input";
import InputPasswordLen from "../inputPasswordLength";
import { Container, PassForm } from "./styles";

const PasswordForm = () => {
    const [len, setLen] = useState()

    return (
        <Container>
            <PassForm>
                <InputPasswordLen len={len} setLen={setLen} />
                <InputPass description={'Letras Maiúsculas'} />
                <InputPass description={'Letras Minúscula'} />
                <InputPass description={'Símbolos'} />
                <InputPass description={'Números'} />
                <InputPass description={'Caracteres Especiais'} />
                <Button>Gerar!</Button>
            </PassForm>
        </Container>
    )
}

export default PasswordForm;