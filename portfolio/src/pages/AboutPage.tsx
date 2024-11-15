import React from "react";
import PageContainer from "../components/PageContainer.tsx";
import Card from "../components/Card.tsx";
import Title from "../components/Title.tsx";
import Subtitle from "../components/Subtitle.tsx";
import Text from "../components/Text.tsx";

const About: React.FC = () => {
  return (
      <PageContainer>
        <Card>
            <Title>About me</Title>
            <Subtitle><span style={{ color: "#5F9EA0" }}>❤</span> Education:</Subtitle>
            <Text>— Дальневосточный Федеральный Университет, 3 курс, Прикладная математика и информатика,
            Системное программирование</Text>
            <Text>— Цифровые кафедры, Аналитик данных продвинутого уровня</Text>
            <Subtitle><span style={{ color: "#5F9EA0" }}>❤</span> Operational experience:</Subtitle>
            <Text>— Научно-исследовательский центр Русгидро, Лаборатория предиктивной аналитки, fullstack web-developer</Text>
            <Subtitle><span style={{ color: "#5F9EA0" }}>❤</span> Achievements:</Subtitle>
            <Text>— Посетила осеннюю IT-школу ОИЯИ в городе Дубна, принимала участие в хакатонах по математическому моделированию
            и аналитике больших данных</Text>
            <Text>— Получила диплом 3 степени на научной конференции с темой "Математическое моделирование внутривенной лазерной абляции"</Text>
            <Text>— Дважды принимала участие в ICPC, во второй раз прошла в 1/4 финала</Text>
            <Subtitle><span style={{ color: "#5F9EA0" }}>❤</span> Interesting facts:</Subtitle>
            <Text>— Наиболее интересные для меня направления в IT: аналитика больших данных, машинное обучение, прикладная статистика,
            фронтенд-разработка</Text>
            <Text>— Я окончила школу с золотой медалью и на данный момент иду на красный диплом в университете</Text>
            <Text>— Помимо IT я увлекаюсь спортивной мафией и принимаю участие в турнирах</Text>
        </Card>
      </PageContainer>
  );
};

export default About;