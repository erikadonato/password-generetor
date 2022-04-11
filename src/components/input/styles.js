import styled from "styled-components"

export const Input = styled.input`
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 20rem;
    justify-content: space-between;
    padding: 4% 3%;
    border-radius: 10px;

    &:hover{
        background-color: #efefef;
        border-bottom: 1px solid gray;
    }   
`