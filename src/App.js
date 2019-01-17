import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { dark } from '@material-ui/core/styles/createPalette';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teste: false
		}
	}

	paperStyle = () => createMuiTheme({
		palette: {
			type: 'dark'
		}
	});

	render() {
		return (
			<Container fluid>
				<MuiThemeProvider theme={this.paperStyle()}>
					<Paper className='mainBack col-10' dark >
						<Row>
							<Col md='2'>
								<div style={{ textAlign: 'center' }}>
									<Avatar alt="Remy Sharp" src="perfil.png" style={{ width: '250px', height: '250px', textAnchor: 'middle' }} />
									<Typography variant='overline' style={{ textAnchor: 'middle' }}>Victor Henrique Ribeiro</Typography>
								</div>
							</Col>
						</Row>
					</Paper>
				</MuiThemeProvider>
			</Container>
		);
	}
}

export default App;
