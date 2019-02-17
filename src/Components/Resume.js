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
                main: '#fff'                     // Altera paleta de cores dos botões
            }
        }
    });

    createSectionText = (title, content) => {
        return (
            <div>
                <Row>
                    <Col>
                        <Typography variant='h3' color='primary' className='sectionTitle' gutterBottom style={{ textAlign: 'center', fontFamily: `Lobster` }}>{title}</Typography>
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
            <div style={{width: '100%'}}>
                <MuiThemeProvider theme={this.typoCustomStyle()}>
                    <Typography variant='overline' color='primary'>{skillName}:</Typography>
                </MuiThemeProvider>
                <div style={{width: '100%', border: 'solid 1px #6b6969', borderRadius: '10px', display: 'inline-flex' }}>
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
        return (
            <Paper style={{ marginTop: '3em' }}>
                <Row className='d-flex justify-content-center' style={{ marginBottom: '1em' }}>
                    <Col>
                        <Button variant='text' onClick={this.props.handleBtnShowResume} style={{ width: '100%' }}><KeyboardArrowUp /></Button>
                    </Col>
                </Row>
                <Row style={{ padding: '2em' }}>
                    <Col md='4'>
                        <Row className='d-flex justify-content-center'>
                            <Col md='9'>
                                <div className='text-center customAvatar-div'>
                                    <img alt='Perfil' className='img-fluid customAvatar-img ' src="perfilSquare.png" />
                                </div>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <Col md='9'>
                                <MuiThemeProvider theme={this.typoCustomStyle()}>
                                    <Typography variant='subtitle1' color='primary' style={{ textAlign: 'center' }}>Victor Henrique Ribeiro</Typography>
                                    <Typography variant='subtitle2' color='primary' gutterBottom style={{ textAlign: 'center' }}>Analista de Sistemas</Typography>
                                </MuiThemeProvider>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <Col md='9'>
                                <div style={{ width: '100%' }} >
                                    <MuiThemeProvider theme={this.radioCustomStyle()}>
                                        {this.createSkillBar(90, 'Javascript')}
                                        {this.createSkillBar(59, 'Teste2')}
                                        {this.createSkillBar(33, 'Teste3')}
                                        {this.createSkillBar(20, 'Teste4')}
                                        {this.createSkillBar(16, 'Teste5')}
                                    </MuiThemeProvider>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='8'>
                        <MuiThemeProvider theme={this.typoCustomStyle()}>
                            {
                                this.createSectionText(`About me`, `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.`)
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