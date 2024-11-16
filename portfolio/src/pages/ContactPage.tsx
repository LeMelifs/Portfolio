import React from "react";
import { useState } from 'react';
import PageContainer from "../components/PageContainer.tsx";
import Card from "../components/Card.tsx";
import Title from "../components/Title.tsx";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: DejaVu Sans Mono, monospace;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5F9EA0;
  }
`;


const StyledTextarea = styled.textarea`
  width: 80%;
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: DejaVu Sans Mono, monospace;
  resize: vertical;
  transition: all 0.3s ease;
  min-height: 200px;

  &:focus {
    outline: none;
    border-color: #5F9EA0;
  }
`;


const StyledButton = styled.button`
  width: 30%;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 18px;
  background-color: #5F9EA0;
  border: solid white 2px;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 1.8rem;
  font-weight: normal;
  letter-spacing: 0.1rem;
  font-family: Brush Script MT, Brush Script Std, cursive;

  &:hover {
    background-color: #008B8B;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ErrorMessage = styled.p`
  color: #DC143C;
  font-size: 0.8rem;
  margin: 5px 0 0;
  width: 80%;
  text-align: left;
  font-family: DejaVu Sans Mono, monospace;
`;

const SuccessMessage = styled.p`
  color: #696969;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  font-family: DejaVu Sans Mono, monospace;
`;

const Contact: React.FC = () => {

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
                    <br></br>
                    <StyledInput
                        type="email"
                        placeholder="*Введите почту"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    <br></br>
                    <StyledTextarea
                        placeholder="*Напишите сообщение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></StyledTextarea>
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                    <br></br>
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
                {isSubmitted && <SuccessMessage>Спасибо! Ваше сообщение отправлено ❤</SuccessMessage>}
            </Card>
        </PageContainer>
    );
};

export default Contact;