import React from "react";
import {PageContainer} from "../components/PageContainer.tsx";
import {Card} from "../components/Card.tsx";
import {Title} from "../components/Title.tsx";
import {Subtitle} from "../components/Subtitle.tsx";
import {Text} from "../components/Text.tsx";

export const Skills: React.FC = () => {
  return (
      <PageContainer>
        <Card>
            <Title>Skills</Title>
            <Subtitle><span style={{ color: "#5F9EA0" }}>❤</span> Programming languages:</Subtitle>
            <Text>— Python</Text>
            <Text>— 1C</Text>
            <Text>— C++</Text>
            <Text>— C#</Text>
            <Text>— Javascript</Text>
            <Text>— SQL</Text>
            <Text>— Pascal</Text>
            <Text>— Kotlin</Text>
            <Subtitle><span style={{ color: "#5F9EA0" }}>❤</span> Frameworks and libraries:</Subtitle>
            <Text>— Django rest framework</Text>
            <Text>— Vue.js</Text>
            <Text>— Dash</Text>
            <Subtitle><span style={{ color: "#5F9EA0" }}>❤</span> Software and services:</Subtitle>
            <Text>— JetBrains IDE</Text>
            <Text>— VS Code, VS 2022</Text>
            <Text>— Figma</Text>
            <Text>— 1С Предприятие</Text>
            <Text>— Photoshop</Text>
            <Text>— Jupyter Notebook</Text>
        </Card>
      </PageContainer>
  );
};