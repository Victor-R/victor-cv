/*Author: Victor Henrique Ribeiro - Date: 01/02/2019 
Component: Resume - Language: Javascript - 
Desc: A component where's all the content of Resume, that is skills, projects, jobs, occupations, etc..*/
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Col, Row } from 'reactstrap';
import '../css/Resume.css';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { createMuiTheme, MuiThemeProvider, Button, Radio, List, ListItem, ListItemText, IconButton } from '@material-ui/core';

function GenerateRadioInput(props) {
    let items = [];
    for (let i = 0; i < props.numberOfButtons; i++) {
        items.push(props.children(i));
    }
    return (
        <div style={{ width: `${props.percent}%`, overflow: 'hidden' }} className='d-inline-flex justify-content-between sectionTitle'>
            {items}
        </div>
    );
}

class Resume extends Component {

    // Customiza o Componente Typography do MaterialUI
    typoCustomStyle = () => createMuiTheme({
        typography: {
            useNextVariants: true,                  // tipografia padrão do materialUI            
        },
        palette: {
            primary: {
                main: this.props.darkMode ? '#fafafa' : '#000'                     // Altera paleta de cores dos botões
            }
        }
    });

    btnCustomStyles = () => createMuiTheme({
        typography: {
            useNextVariants: true,                  // tipografia padrão do materialUI            
        },
        palette: {
            primary: {
                main: '#22569f'//'#5E35b1'                     // Altera paleta de cores dos botões
            }
        },
        overrides: {
            MuiTypography: {
                colorTextSecondary: {
                    color: this.props.darkMode ? '#fffcfccc' : ''
                },
                body1: {
                    color: this.props.darkMode ? '#fff' : ''
                }
            }
        }
    });

    createSectionText = (title, content) => {
        return (
            <section>
                <Row>
                    <Col>
                        <Typography variant='h3' className='sectionTitle' gutterBottom style={{ color: '#fff', textAlign: 'center', fontFamily: `Lobster` }}>
                            {this.props.language === 'pt-br' ? title.pt : title.en}
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.language === 'pt-br' ? content.pt : content.en}
                    </Col>
                </Row>
            </section>
        )
    }

    createSkillBar = (percent, skillName) => {
        let radioButtons = Math.ceil(percent / 10);
        return (
            <div key={skillName} style={{ width: '100%' }}>
                <MuiThemeProvider theme={this.typoCustomStyle()}>
                    <Typography variant='overline' color='primary'>{skillName}:</Typography>
                </MuiThemeProvider>
                <div style={{ width: '100%', border: 'solid 1px #6b6969', borderRadius: '10px', display: 'inline-flex' }}>
                    <GenerateRadioInput numberOfButtons={radioButtons} percent={percent}>
                        {(index) => <Radio color='primary' disabled checked key={index} />}
                    </GenerateRadioInput>
                </div>
            </div>
        );
    }

    createProjectItem = ({ name, description, url }) => {
        return (<ListItem key={description} button onClick={() => window.open(url, '__blank')}>
            <ListItemText primary={name} secondary={description} />
        </ListItem>)
    }


    radioCustomStyle = () => createMuiTheme({
        typography: {
            useNextVariants: true,                  // tipografia padrão do materialUI            
        },
        palette: {
            primary: {
                main: '#000'                     // Altera paleta de cores dos botões
            }
        },
        overrides: {
            MuiIconButton: {
                root: {
                    padding: '0px'
                }
            }
        }
    });


    render() {

        const skillList = [
            { name: 'Github', value: 70 },
            { name: this.props.language === 'pt-br' ? 'Inglês' : 'English', value: 90 },
            { name: 'React+Redux', value: 60 },
            { name: 'Javascript', value: 60 },
            { name: 'SQL & PL/SQL', value: 80 },
            { name: 'Express', value: 60 },
            { name: 'React Native', value: 25 }
        ]

        const projectList = [
            {
                name: this.props.language === 'pt-br' ? 'Victor-cv (Este Site)' : 'Victor-cv (This Site!)',
                description: this.props.language === 'pt-br' ?
                    'Uma página para apresentar meu trabalho e falar um pouco sobre mim, sendo utilizada como Curriculo.' :
                    'A website to show my work and speak about me, using it as a Resume.',
                url: 'https://github.com/Victor-R/victor-cv'
            },
            {
                name: 'OmniStackWeek',
                description: this.props.language === 'pt-br' ?
                    'Um projeto completo unindo React, React Native e Express. Que imita o Instagram com atualizações em tempo real.' :
                    'An React, React Native and Express project. Inspired on Instagram with updates in real-time.',
                url: 'https://github.com/Victor-R/OmniStackWeek'
            },
            {
                name: 'App Suprimentos',
                description: this.props.language === 'pt-br' ?
                    'Uma aplicação React + Redux, de um portal de suprimentos.' :
                    'An React + Redux Application of a provision company portal.',
                url: 'https://github.com/Victor-R/app_suprimentos'
            },
            {
                name: 'Projeto-DOOM',
                description: this.props.language === 'pt-br' ?
                    'Um simples projeto que recria o fogo do jogo DOOM, com uma table em HTML e código em Javascript.' :
                    'A simple project that recreates the fire of the game DOOM, with a table in HTML and Javascript code.',
                url: 'https://github.com/Victor-R/Projeto-DOOM'
            },
            {
                name: 'trabalhoIA',
                description: this.props.language === 'pt-br' ?
                    'Sistema de simulação de resgate, simulação de interação multiagentes. O objetivo do projeto é criar estratégias em uma situação de desastre. (Java)' :
                    'System of rescue simulation and multiagent interation simulation. The objective is to create strategies in a disaster event. (Java)',
                url: 'https://github.com/Victor-R/trabalhoIA'
            },
            {
                name: 'bioSense',
                description: this.props.language === 'pt-br' ?
                    'Projeto academico em Java onde é simulado sensores em uma Estufa' :
                    'Academic Project in Java where sensors are simulated in a greenhouse',
                url: 'https://github.com/Victor-R/bioSense'
            }

        ]


        return (
            <Paper className='main-Resume'>
                <Row className='d-flex justify-content-center' style={{ marginBottom: '1em' }}>
                    <Col>
                        <Button variant='text' className='btn-block' onClick={this.props.handleBtnShowResume}><KeyboardArrowUp /></Button>
                    </Col>
                </Row>
                <Row style={{ padding: '2em' }}>
                    <Col lg='4' style={{ marginBlockEnd: '1em' }}>
                        <Row className='d-flex justify-content-center'>
                            <Col lg='9'>
                                <div className='text-center customAvatar-div'>
                                    <img alt='Perfil' className='img-fluid customAvatar-img ' src="perfilSquare.png" />
                                </div>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <Col lg='9'>
                                <MuiThemeProvider theme={this.typoCustomStyle()}>
                                    <Typography variant='subtitle1' color='primary' style={{ textAlign: 'center' }}>Victor Henrique Ribeiro</Typography>
                                    <Typography variant='subtitle2' color='primary' gutterBottom style={{ textAlign: 'center' }}>
                                        {this.props.language === 'pt-br' ? 'Analista de Sistemas' : 'System Analyst'}
                                    </Typography>
                                    <div className="d-flex justify-content-center">
                                        <IconButton onClick={() => window.open('https://github.com/Victor-R/', '__blank')} color='primary'>
                                            <FaGithub />
                                        </IconButton>
                                        <IconButton onClick={() => window.open('https://www.linkedin.com/in/victor-henrique-ribeiro-34172811a/', '__blank')} color='primary'>
                                            <FaLinkedin />
                                        </IconButton>
                                    </div>
                                </MuiThemeProvider>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <Col lg='9'>
                                <div style={{ width: '100%' }} >
                                    <MuiThemeProvider theme={this.radioCustomStyle()}>
                                        {
                                            skillList
                                                .sort((a, b) => (a.value < b.value ? 1 : -1))
                                                .map(skill => this.createSkillBar(skill.value, skill.name))
                                        }
                                    </MuiThemeProvider>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg='8'>
                        <MuiThemeProvider theme={this.typoCustomStyle()}>
                            {
                                this.createSectionText(
                                    { pt: 'Sobre mim', en: `About me` },
                                    {
                                        pt: <Typography variant='body1' color='primary' gutterBottom style={{ textAlign: 'center', fontFamily: `ABeeZee` }}>
                                            Olá meu nome é Victor, sou Analista de Sistemas e desenvolvedor de software. Desde que realizei meu Técnido em Informática, me apaixonei por programação.<br />
                                            Atualmente, formando em Ciência da Computação pela UNESP, tenho feito alguns projetos para expandir meus horizontes como desenvolvedor, utilizando ferramentas como:
                                            React, React Redux, React Native, Express, Java.<br /> Você pode acompanhar alguns dos meus projetos na seção "Projetos Recentes".
                                            </Typography>,
                                        en: <Typography variant='body1' color='primary' gutterBottom style={{ textAlign: 'center', fontFamily: `ABeeZee` }}>Hi my name is Victor, I'm System Analyst and software developer. Since I've finished my IT course, I fell in love with programming.<br />
                                            Nowadays, concluding Computer Science degree on UNESP, I've been doing some projects to expand my horizons as a developer,
                                        with technologies as: React, React Redux, React Native, Express, Java.<br /> You can follow some of my projects in section "Recent Projects".</Typography>
                                    },

                                )
                            }
                            {
                                this.createSectionText(
                                    { pt: 'Formação', en: `Education` },
                                    {
                                        pt: <Typography variant='body1' color='primary' gutterBottom style={{ textAlign: 'center', fontFamily: `ABeeZee` }}>
                                            Bacharelado em Ciência da Computação – Junho, 2019 Universidade Estadual Paulista – UNESP – Rio Claro, SP <br />
                                            Curso Técnico em Tecnologia da Informação – Dezembro, 2012 ETEC – Escola Técnica Dep. Ary de Camargo Pedroso – Piracicaba, SP
                                            </Typography>,
                                        en: <Typography variant='body1' color='primary' gutterBottom style={{ textAlign: 'center', fontFamily: `ABeeZee` }}>
                                            Bacharel in Computer Science - June 2019 Universidade Estadual Paulista – UNESP <br />
                                            Technical Course in Information Technology IT – December 2012 ETEC – Escola Técnica Dep. Ary de Camargo Pedroso – Piracicaba, SP
                                            </Typography>
                                    },
                                )
                            }
                            {
                                this.createSectionText(
                                    { pt: 'Experiência Profissional', en: `Work Experience` },
                                    {
                                        pt: <Typography variant='body1' color='primary' gutterBottom style={{ textAlign: 'center', fontFamily: `ABeeZee` }}>
                                            <li>GAtec S/A – Gestão Agroindustrial; Agosto/2016 até Dezembro/2016; Infra - Estágio</li>
                                            <li>CENTRUS – Central do SUS – Prefeitura de Piracicaba; Junho/2015 até Julho/2016; Infra - Estágio</li>
                                            <li>Icaro Tech – Serviços e Comércio; Janeiro/2017 até Junho/2017; Analista de Suporte - Estágio</li>
                                            <li><b>DEDINI – Indústrias de Base; Agosto/2017 – até o momento; Analista de Sistema Júnior</b></li>
                                        </Typography>,
                                        en: <Typography variant='body1' color='primary' gutterBottom style={{ textAlign: 'center', fontFamily: `ABeeZee` }}>
                                            <li>GAtec S/A – Gestão Agroindustrial; August/2016 until December/2016; Infrastructure - Internship</li>
                                            <li>CENTRUS – Central do SUS – Prefeitura de Piracicaba; June/2015 until July/2016; Infrastructure - Internship</li>
                                            <li>Icaro Tech – Serviços e Comércio; January/2017 until June/2017; Support Analyst - Internship</li>
                                            <li><b>DEDINI – Indústrias de Base; august/2017 – até o momento; Júnior System Analyst</b></li>
                                        </Typography>
                                    },

                                )
                            }
                            {
                                this.createSectionText(
                                    { pt: 'Projetos Recentes', en: `Recent Projects` },
                                    {
                                        pt: <MuiThemeProvider theme={this.btnCustomStyles()}>
                                            <Button className='btn-block' onClick={() => window.open('https://github.com/Victor-R/', '__blank')} color='primary' variant='contained'>
                                                Acesse minha página do Github&nbsp;<FaGithub size={25} />
                                            </Button>
                                            <List className={'project-list'}>
                                                {
                                                    projectList.map(project => this.createProjectItem(project))
                                                }
                                            </List>
                                        </MuiThemeProvider>,
                                        en: <MuiThemeProvider theme={this.btnCustomStyles()}>
                                            <Button style={{marginBottom: '1em'}} className='btn-block' onClick={() => window.open('https://github.com/Victor-R/', '__blank')} color='primary' variant='contained'>Visit My Github Page&nbsp;<FaGithub size={25} /></Button>
                                            <List className={'project-list'}>
                                                {
                                                    projectList.map(project => this.createProjectItem(project))
                                                }
                                            </List>
                                        </MuiThemeProvider>
                                    },
                                )
                            }
                        </MuiThemeProvider>
                    </Col>
                </Row>
            </Paper>
        )
    }
}

export default Resume;