import React from "react";
import { useState } from 'react';
import {PageContainer} from "../components/PageContainer";
import {Card} from "../components/Card";
import {Title} from "../components/Title";
import {StyledForm} from "../components/form/StyledForm";
import {StyledInput} from "../components/form/StyledInput";
import {ErrorMessage} from "../components/form/ErrorMessage";
import {StyledTextarea} from "../components/form/StyledTextarea";
import {StyledButton} from "../components/form/StyledButton";
import SuccessMessage from "../components/form/SuccessMessage";


export const Contact: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: { email?: string; message?: string } = {};

        if (!email) {
            newErrors.email = "Поле \"Почта\" обязательно для заполнения.";
        } else if (!validateEmail(email)) {
            newErrors.email = "Введите корректный email.";
        }

        if (!message) {
            newErrors.message = "Поле \"Сообщение\" обязательно для заполнения.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        if (validateForm()) {
            setName("");
            setEmail("");
            setMessage("");
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }
        e.preventDefault();
    }

    return (
        <PageContainer>
            <Card width="40vw">
                <Title>Contact me</Title>
                <StyledForm onSubmit={handleSubmit}
                >
                    <StyledInput
                        type="text"
                        placeholder="Введите имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br/>
                    <StyledInput
                        type="email"
                        placeholder="*Введите почту"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    <br/>
                    <StyledTextarea
                        placeholder="*Напишите сообщение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                    <br/>
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
                {isSubmitted && <SuccessMessage>Спасибо! Ваше сообщение отправлено ❤</SuccessMessage>}
            </Card>
        </PageContainer>
    );
};