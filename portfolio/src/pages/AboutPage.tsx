import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


const Card = styled.div`
  height: auto;
  border-radius: 20px;
  width: 60vw;
  background-color: #DCDCDC;
  display: flex;
  border: 2px solid #d0d0d0;
  flex-direction: column;
  padding: 10px;
`

const MainHeader = styled.p`
  font-size: 2.5rem;
  text-align: center;
  text-decoration: underline 2px #5F9EA0;
  letter-spacing: 0.1rem;
  margin-top: 5px;
  font-weight: normal;
  color: #808080;
  font-family: Brush Script MT, Brush Script Std, cursive;
`

const Header = styled.p`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  margin-top: -10px;
  margin-left: 15px;
  font-weight: normal;
  color: #808080;
  font-family: Brush Script MT, Brush Script Std, cursive;
`

const Text = styled.p`
  font-size: 1.1rem;
  text-align: justify;
  margin-top: -20px;
  margin-left: 60px;
  margin-right: 60px;
  font-family: Courier New, monospace;
`

const About: React.FC = () => {
  return (
      <AboutContainer>
        <Card>
            <MainHeader>About me</MainHeader>
            <Header><span style={{ color: "#5F9EA0" }}>❤</span> Education:</Header>
            <Text>— Дальневосточный Федеральный Университет, 3 курс, Прикладная математика и информатика,
            Системное программирование</Text>
            <Text>— Цифровые кафедры, Аналитик данных продвинутого уровня</Text>
            <Header><span style={{ color: "#5F9EA0" }}>❤</span> Operational experience:</Header>
            <Text>— Научно-исследовательский центр Русгидро, Лаборатория предиктивной аналитки, fullstack web-developer</Text>
            <Header><span style={{ color: "#5F9EA0" }}>❤</span> Achievements:</Header>
            <Text>— Посетила осеннюю IT-школу ОИЯИ в городе Дубна, принимала участие в хакатонах по математическому моделированию
            и аналитике больших данных</Text>
            <Text>— Получила диплом 3 степени на научной конференции с темой "Математическое моделирование внутривенной лазерной абляции"</Text>
            <Text>— Дважды принимала участие в ICPC, во второй раз прошла в 1/4 финала</Text>
            <Header><span style={{ color: "#5F9EA0" }}>❤</span> Interesting facts:</Header>
            <Text>— Наиболее интересные для меня направления в IT: аналитика больших данных, машинное обучение, прикладная статистика,
            фронтенд-разработка</Text>
            <Text>— Я окончила школу с золотой медалью и на данный момент иду на красный диплом в университете</Text>
            <Text>— Помимо IT я увлекаюсь спортивной мафией и принимаю участие в турнирах</Text>
        </Card>
      </AboutContainer>
  );
};

export default About;