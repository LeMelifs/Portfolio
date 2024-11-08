import React from "react";
import styled from "styled-components";
import MyPhoto from '../assets/MyPhoto.jpg';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 370px;
  height: 370px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #d0d0d0; 
  margin-top: 20px;
`;

const Name = styled.p`
  font-size: 2rem;
  margin-top: 15px;
  letter-spacing: 0.1rem;
  font-weight: normal;
  color: #696969;
  text-align: center;
  font-family: Brush Script MT, Brush Script Std, cursive;
`

const Info = styled.p`
  font-size: 1.1rem;  
  width: 50vw;
  text-align: justify;
  margin-top: -20px;
  font-family: Courier New, monospace;
`

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ProfileImage src={MyPhoto}  />
        <Name>Veronika Blokhina <span style={{ color: "#5F9EA0" }}>→</span> LeMelifs <span style={{ color: "#5F9EA0" }}>❤</span></Name>
        <br/>
        <Info>Добро пожаловать, дорогой читатель! Меня зовут <span style={{ color: "#5F9EA0", fontWeight: "bold" }}>Блохина Вероника</span>. На данный момент мне 20 лет, учусь и проживаю
            в замечательном городе Владивосток. Я студентка <span style={{ color: "#5F9EA0", fontWeight: "bold" }}>3 курса</span> Дальневосточного Федерального
        Университета, направления "Прикладная математика и информатика", профиля обучения "Системное программирование".
            Также я работаю в научно-исследовательском центре "Русгидро" на должности <span style={{ color: "#5F9EA0", fontWeight: "bold" }}>fullstack web-разработчика</span> в отделе
            предиктивной аналитики.
        На данном сайте я расскажу о своём опыте, навыках и знаниях в сфере IT. Приятного прочтения!</Info>
    </HomeContainer>
  );
};


export default Home;