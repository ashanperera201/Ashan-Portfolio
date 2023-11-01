import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'

import { darkTheme, lightTheme } from './shared/utils/theme'
import Navbar from './shared/components/Navbar';
import HeroSection from './shared/components/HeroSection';
import Experience from './shared/components/Experience';
import Projects from './shared/components/Projects';
import Skills from './shared/components/Skills';
import Education from './shared/components/Education';
import Contact from './shared/components/Contact';
import Footer from './shared/components/Footer';
import ProjectDetails from './shared/components/ProjectDetails';

import './App.scss';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const App = (): JSX.Element => {

  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });


  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter >
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;

