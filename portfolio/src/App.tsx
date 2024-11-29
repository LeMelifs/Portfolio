import {Header} from "./components/Header.tsx";
import React from "react";
import {Home} from "./pages/HomePage.tsx";
import {About} from "./pages/AboutPage.tsx";
import {Contact} from "./pages/ContactPage.tsx";
import {Projects} from "./pages/ProjectsPage.tsx";
import {Skills} from "./pages/SkillsPage.tsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Footer} from "./components/Footer.tsx";
import styled from "styled-components";
import {store} from "./store";
import {Provider} from "react-redux";


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1; 
  display: flex;
  flex-direction: column;
`;

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </Provider>
  );
};