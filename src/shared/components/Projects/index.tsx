import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constant-data'


const Projects = (props: any) => {

    const { openModal, setOpenModal } = props;

    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup >
                    {toggle === "all" ?
                        <ToggleButton active onClick={() => setToggle('all')}>All</ToggleButton>
                        :
                        <ToggleButton active={false} onClick={() => setToggle('all')}>All</ToggleButton>
                    }
                    <Divider />
                    {toggle === "web app" ?
                        <ToggleButton active={true} onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                        :
                        <ToggleButton active={false} onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                    }
                    <Divider />
                    {toggle === "android app" ?
                        <ToggleButton active={true} onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                        :
                        <ToggleButton active={false} onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                    }
                    <Divider />
                    {toggle === "machine learning" ?
                        <ToggleButton active={true} onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                        :
                        <ToggleButton active={false} onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === "all" && projects
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects