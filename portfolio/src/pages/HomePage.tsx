import React, { useContext } from "react";
import styled from "styled-components";
import MyPhoto from "../assets/MyPhoto.jpg";
import { PageContainer } from "../components/PageContainer";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ProfileImage = styled(motion.img)<{ theme: string }>`
  width: 370px;
  height: 370px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${({ theme }) => (theme === "light" ? "#d0d0d0" : "#444")};
  margin-top: 20px;
  
  @media (max-width: 763px) {
    width: 300px;
    height: 300px;  
  }
  
  @media (max-width: 500px) {
    width: 230px;
    height: 230px;  
  }
`;

const Name = styled(motion.p)<{ theme: string }>`
  font-size: 2rem;
  margin-top: 15px;
  letter-spacing: 0.1rem;
  font-weight: normal;
  color: ${({ theme }) => (theme === "light" ? "#808080" : "#e0e0e0")};
  font-family: Brush Script MT, Brush Script Std, cursive;
  
  @media (max-width: 763px) {
    font-size: 1.5rem; 
  }
  
  @media (max-width: 500px) {
    font-size: 1rem; 
  }
`;

const Info = styled(motion.p)<{ theme: string }>`
  font-size: 1.1rem;
  width: 700px;
  text-align: justify;
  margin-top: -20px;
  font-family: Courier New, monospace;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#e0e0e0")};
  
  @media (max-width: 763px) {
    width: 450px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <PageContainer theme={theme}>
      <ProfileImage
        src={MyPhoto}
        theme={theme}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
      <Name
        theme={theme}
        variants={nameVariants}
        initial="hidden"
        animate="visible"
      >
        Veronika Blokhina <span style={{ color: "#5F9EA0" }}>→</span> LeMelifs{" "}
        <span style={{ color: "#5F9EA0" }}>❤</span>
      </Name>
      <br />
      <Info
        theme={theme}
        variants={infoVariants}
        initial="hidden"
        animate="visible"
      >
        Добро пожаловать, дорогой читатель! Меня зовут{" "}
        <span
          style={{ color: "#5F9EA0", fontWeight: "bold" }}
        >
          Блохина Вероника
        </span>
        . На данный момент мне 20 лет, учусь и проживаю в замечательном городе
        Владивосток. Я студентка{" "}
        <span
          style={{ color: "#5F9EA0", fontWeight: "bold" }}
        >
          3 курса
        </span>{" "}
        Дальневосточного Федерального Университета, направления "Прикладная
        математика и информатика", профиля обучения "Системное программирование".
        Также я работаю в научно-исследовательском центре "Русгидро" на должности{" "}
        <span
          style={{ color: "#5F9EA0", fontWeight: "bold" }}
        >
          fullstack web-разработчика
        </span>{" "}
        в отделе предиктивной аналитики. На данном сайте я расскажу о себе,
        своём опыте и навыках в сфере IT. Приятного прочтения!
      </Info>
    </PageContainer>
  );
};
