/*Author: Victor Henrique Ribeiro - Date: 01/02/2019 
Component: Resume - Language: Javascript - 
Desc: A component where's all the content of Resume, that is skills, projects, jobs, occupations, etc..*/
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Col, Row } from 'reactstrap';
import '../css/Resume.css';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { createMuiTheme, MuiThemeProvider, Button, Radio } from '@material-ui/core';

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
    constructor(props) {
        super(props);
        this.state = {

        }
    }

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

    createSectionText = (title, content) => {
        return (
            <div>
                <Row>
                    <Col>
                        <Typography variant='h3' className='sectionTitle' gutterBottom style={{ color: '#fff', textAlign: 'center', fontFamily: `Lobster` }}>{title}</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Typography variant='body1' color='primary' gutterBottom style={{ textAlign: 'center', fontFamily: `ABeeZee` }}>
                            {content}
                        </Typography>
                    </Col>
                </Row>
            </div>
        )
    }

    createSkillBar = (percent, skillName) => {
        let radioButtons = Math.ceil(percent / 10);
        return (
            <div style={{ width: '100%' }}>
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
            { name: 'Github', value: 90 },
            { name: 'Inglês', value: 90 },
            { name: 'React+Redux', value: 60 },
            { name: 'Javascript', value: 60 },
            { name: 'SQL & PL/SQL', value: 80 },
            { name: 'Express', value: 60 },
        ]

        return (
            <Paper style={{ marginTop: '3em' }}>
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
                                    <Typography variant='subtitle2' color='primary' gutterBottom style={{ textAlign: 'center' }}>Analista de Sistemas</Typography>
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
                                this.createSectionText(`About me`, `Atuo à 2 anos como programador, onde realizei projetos na área de Web, Oracle ERP e banco de dados.`)
                            }
                            {
                                this.createSectionText(`Education`, `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.`)
                            }
                            {
                                this.createSectionText(`Work Experience`, `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.`)
                            }
                        </MuiThemeProvider>
                    </Col>
                </Row>
            </Paper>
        )
    }
}

export default Resume;