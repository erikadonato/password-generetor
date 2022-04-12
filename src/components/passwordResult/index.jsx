import React, { useEffect } from "react";
import { ContainerResult } from "./styles";

const PasswordResult = ({password}) => {
    
    useEffect((

    ) => {}, [password])
    console.log('password',password);
    return (
        <ContainerResult>
            {password}
        </ContainerResult>
    )
}

export default PasswordResult