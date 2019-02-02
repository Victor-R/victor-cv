import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Resume from './Resume';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showResume: false,
		}
	}

	// Customiza o componente Paper do materialUI
	paperStyle = () => createMuiTheme({
		typography: {
			useNextVariants: true,                  // tipografia padrão do materialUI            
		},
		palette: {
			type: 'dark'
		}
	});

	// Customiza estilos dos botões de MaterialUI
	btnCustomStyles = () => createMuiTheme({
		typography: {
			useNextVariants: true,                  // tipografia padrão do materialUI            
		},
		palette: {
			primary: {
				main: '#22569f'                     // Altera paleta de cores dos botões
			}
		}
	});

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

	handleBtnShowResume = () => {
		this.setState({
			showResume: !this.state.showResume
		});
	}

	render() {
		return (
			<Container className='d-flex justify-content-center'>
				<MuiThemeProvider theme={this.paperStyle()}>
					<Paper className='mainBack' >
						<Row className="d-flex align-items-center">
							<Col md='3' style={{ maxWidth: '100%' }}>
								<Avatar src="perfil.png" style={{ width: '250px', height: '250px' }} />
							</Col>
							<Col>
								<Row>
									<MuiThemeProvider theme={this.typoCustomStyle()}>
										<Typography variant='h3' color='primary' gutterBottom>Victor Henrique Ribeiro</Typography>
									</MuiThemeProvider>
								</Row>
								<Row className='d-flex justify-content-center'>
									<MuiThemeProvider theme={this.btnCustomStyles()}>
										<Button variant='contained' color='primary' onClick={this.handleBtnShowResume}>show Resume</Button>
									</MuiThemeProvider>
								</Row>
								{
									this.state.showResume ? <Resume /> : ''
								}
								
							</Col>
						</Row>
					</Paper>
				</MuiThemeProvider>
			</Container>
		);
	}
}

export default App;
