import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
            <StyledContacts>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field as ={'textarea'}placeholder={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #fffae1;
`
const StyledForm = styled.form`
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Field = styled.input`

`
