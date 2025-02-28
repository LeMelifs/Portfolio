import React, { useContext } from "react";
import { PageContainer } from "../components/PageContainer";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <PageContainer theme={theme}>
      <Card theme={theme} as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title theme={theme}>About me</Title>
        <Subtitle theme={theme}>
          <span style={{ color: "#5F9EA0" }}>❤</span> Education:
        </Subtitle>
        <Text theme={theme}>
          — Дальневосточный Федеральный Университет, 3 курс, Прикладная математика и информатика,
          Системное программирование
        </Text>
        <Text theme={theme}>
          — Цифровые кафедры, Аналитик данных продвинутого уровня
        </Text>
        <Subtitle theme={theme}>
          <span style={{ color: "#5F9EA0" }}>❤</span> Operational experience:
        </Subtitle>
        <Text theme={theme}>
          — Научно-исследовательский центр Русгидро, Лаборатория предиктивной аналитки, fullstack web-developer
        </Text>
        <Subtitle theme={theme}>
          <span style={{ color: "#5F9EA0" }}>❤</span> Achievements:
        </Subtitle>
        <Text theme={theme}>
          — Посетила осеннюю IT-школу ОИЯИ в городе Дубна, принимала участие в хакатонах по математическому моделированию
          и аналитике больших данных
        </Text>
        <Text theme={theme}>
          — Получила диплом 3 степени на научной конференции с темой "Математическое моделирование внутривенной лазерной абляции"
        </Text>
        <Text theme={theme}>
          — Дважды принимала участие в ICPC, во второй раз прошла в 1/4 финала
        </Text>
        <Subtitle theme={theme}>
          <span style={{ color: "#5F9EA0" }}>❤</span> Interesting facts:
        </Subtitle>
        <Text theme={theme}>
          — Наиболее интересные для меня направления в IT: аналитика больших данных, машинное обучение, прикладная статистика,
          фронтенд-разработка
        </Text>
        <Text theme={theme}>
          — Я окончила школу с золотой медалью и на данный момент иду на красный диплом в университете
        </Text>
        <Text theme={theme}>
          — Помимо IT я увлекаюсь спортивной мафией и принимаю участие в турнирах
        </Text>
      </Card>
    </PageContainer>
  );
};
