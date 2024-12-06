import React, { useContext } from "react";
import { PageContainer } from "../components/PageContainer";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Text } from "../components/Text";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      >
        <Title theme={theme}>Skills</Title>

        {/* Subtitle + Text Animated Group */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        >
          <Subtitle theme={theme}>
            <span style={{ color: "#5F9EA0" }}>❤</span> Programming languages:
          </Subtitle>
          <motion.div variants={itemVariants}>
            <Text theme={theme}>— Python</Text>
            <Text theme={theme}>— 1C</Text>
            <Text theme={theme}>— C++</Text>
            <Text theme={theme}>— C#</Text>
            <Text theme={theme}>— Javascript</Text>
            <Text theme={theme}>— SQL</Text>
            <Text theme={theme}>— Pascal</Text>
            <Text theme={theme}>— Kotlin</Text>
          </motion.div>

          <Subtitle theme={theme}>
            <span style={{ color: "#5F9EA0" }}>❤</span> Frameworks and libraries:
          </Subtitle>
          <motion.div variants={itemVariants}>
            <Text theme={theme}>— Django rest framework</Text>
            <Text theme={theme}>— Vue.js</Text>
            <Text theme={theme}>— Dash</Text>
          </motion.div>

          <Subtitle theme={theme}>
            <span style={{ color: "#5F9EA0" }}>❤</span> Software and services:
          </Subtitle>
          <motion.div variants={itemVariants}>
            <Text theme={theme}>— JetBrains IDE</Text>
            <Text theme={theme}>— VS Code, VS 2022</Text>
            <Text theme={theme}>— Figma</Text>
            <Text theme={theme}>— 1С Предприятие</Text>
            <Text theme={theme}>— Photoshop</Text>
            <Text theme={theme}>— Jupyter Notebook</Text>
          </motion.div>
        </motion.div>
      </Card>
    </PageContainer>
  );
};
