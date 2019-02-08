import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import Resume from './Resume';
import './App.css';
import { createMuiTheme, MuiThemeProvider, Fab } from '@material-ui/core';


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
			<Container>
				<MuiThemeProvider theme={this.paperStyle()}>
					<Grow in={this.state.showResume} mountOnEnter unmountOnExit>
						<Row>
							<Col>
								<Resume handleBtnShowResume={this.handleBtnShowResume} />
							</Col>
						</Row>
					</Grow>
					<Grow in={!this.state.showResume} mountOnEnter unmountOnExit>
						<Row className='d-flex justify-content-center'>
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
												<Fab variant='extended' color='primary' onClick={this.handleBtnShowResume}>show resume<KeyboardArrowDown/></Fab>
											</MuiThemeProvider>
										</Row>
									</Col>
								</Row>
							</Paper>
						</Row>
					</Grow>

				</MuiThemeProvider>
			</Container >
		);
	}
}

export default App;
