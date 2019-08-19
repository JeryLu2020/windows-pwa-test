import React, { useState } from 'react';
import { Navbar, Nav, Button, ButtonToolbar, Modal, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import history from '../Pages/History';

let url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/users' : "https://windows-pwa-express.azurewebsites.net/api/users"

function Navbarfunc() {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSingin = () => {
		setShow(false);
		console.log(username);
		console.log(password);

		fetch(url + '/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				"username": username,
				"password": password,
			})
		})
		.then(results => {
			console.log(results.status);
			if(results.status == 200) {
				history.push('/#/users')
				window.location.reload();
				// return <Redirect to='/#/users' />
			} else {
				history.push('/#/home')
				window.location.reload();
			}
		})
		.catch((error) => { 
			console.error(error);
		});
	}

	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">Express React MongoDB</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#users">Users</Nav.Link>
					</Nav>
					<Nav>
						<ButtonToolbar>
							{/* <Button variant="info" onClick={() => setModalShow(true)}>Signin</Button> */}
							<Button variant="info" onClick={handleShow}>Signin</Button>
							<Modal show={show} onHide={handleClose} animation={false} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>Modal heading</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form.Group controlId="formBasicUsername">
										<Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
									</Form.Group>
									<Form.Group controlId="formBasicPassword">
										<Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
									</Form.Group>
								</Modal.Body>
								<Modal.Footer>
									<Button type='button' variant="primary" onClick={handleSingin}>
										Go
									</Button>
								</Modal.Footer>
							</Modal>
						</ButtonToolbar>
						<ButtonToolbar>
							<Button variant="light">Signout</Button>
						</ButtonToolbar>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default class NavbarTop extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { value: '' };

	// 	this.handleChange = this.handleChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }

	// handleChange(event) {
	// 	this.setState({ value: event.target.value });
	// }

	// handleSubmit(event) {
	// 	alert('A name was submitted: ' + this.state.value);
	// 	event.preventDefault();
	// }

	render() {
		return (
			<div>
				<Navbarfunc />

			</div>
		);
	}
}


