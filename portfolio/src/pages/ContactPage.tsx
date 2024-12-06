import React, { useContext } from "react";
import { PageContainer } from "../components/PageContainer";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { StyledForm } from "../components/form/StyledForm";
import { StyledInput } from "../components/form/StyledInput";
import { ErrorMessage } from "../components/form/ErrorMessage";
import { StyledTextarea } from "../components/form/StyledTextarea";
import { StyledButton } from "../components/form/StyledButton";
import { SuccessMessage } from "../components/form/SuccessMessage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { resetForm, setEmail, setErrors, setIsSubmitted, setMessage, setName } from "../store/contactFormSlice";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { name, email, message, errors, isSubmitted } = useSelector((state: RootState) => state.contactForm);
  const { theme } = useContext(ThemeContext);

  const validateEmail = (email: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: { email?: string; message?: string } = {};
    if (!email) {
      newErrors.email = 'Поле "Почта" обязательно для заполнения.';
    } else if (!validateEmail(email)) {
      newErrors.email = "Введите корректный email.";
    }

    if (!message) {
      newErrors.message = 'Поле "Сообщение" обязательно для заполнения.';
    }

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(resetForm());
      setTimeout(() => {
        dispatch(setIsSubmitted(false));
      }, 3000);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageContainer theme={theme}>
      <Card
        theme={theme}
        as={motion.div}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        width="40vw"
      >
        <Title theme={theme}>Contact me</Title>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            theme={theme}
            type="text"
            value={name}
            placeholder="Введите имя"
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          <br />
          <StyledInput
            theme={theme}
            type="email"
            value={email}
            placeholder="*Введите почту"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <br />
          <StyledTextarea
            theme={theme}
            value={message}
            placeholder="*Напишите сообщение"
            onChange={(e) => dispatch(setMessage(e.target.value))}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          <br />
          <StyledButton theme={theme} type="submit">
            Submit
          </StyledButton>
        </StyledForm>
        {isSubmitted && <SuccessMessage theme={theme}>Спасибо! Ваше сообщение отправлено ❤</SuccessMessage>}
      </Card>
    </PageContainer>
  );
};
