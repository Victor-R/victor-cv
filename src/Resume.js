/*Author: Victor Henrique Ribeiro - Date: 01/02/2019 
Component: Resume - Language: Javascript - 
Desc: A component where's all the content of Resume, that is skills, projects, jobs, occupations, etc..*/
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Col, Row } from 'reactstrap';
import './Resume.css';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { createMuiTheme, MuiThemeProvider, Button } from '@material-ui/core';


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

    render() {
        return (
            <Paper style={{ marginTop: '3em' }}>
                <Row className='d-flex justify-content-center'>
                    <Col>
                        <Button variant='text' onClick={this.props.handleBtnShowResume} style={{ width: '100%' }}><KeyboardArrowUp /></Button>
                    </Col>
                </Row>
                <Row className='resume-row '>
                    <Col md='2' style={{ maxWidth: '100%' }}>
                        <Avatar src="perfil.png" style={{ width: '250px', height: '250px' }} />
                    </Col>
                    <Col>
                        <MuiThemeProvider theme={this.typoCustomStyle()}>
                            <Typography variant='h3' color='primary' gutterBottom>Victor Henrique Ribeiro</Typography>
                        </MuiThemeProvider>
                    </Col>
                </Row>
            </Paper>
        )
    }
}

export default Resume;