import React, { useState } from 'react';
import { Navbar, Nav, Button, ButtonToolbar, Modal, Form, Alert } from 'react-bootstrap';
import history from '../Pages/History';
import axios from 'axios';

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

		axios({
			method: 'post',
			url: url + '/login',
			data: {
				username: username,
				password: password
 			 }
			})
			.then(res => {
				if(res.status == 200){
					console.log(res.data.email);
					localStorage.setItem('loginemail', res.data.email);
					history.push('/#/home');
					window.location.reload();
				} else {
					history.push('/#/home');
					window.location.reload();
				}
			})
			.catch(err => {
				console.log(err);
				history.push('/#/error');
				window.location.reload();
			})
	}

	const handleSingout = () => {
		// console.log('handleSingout');
		localStorage.clear();
		window.location.reload();
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
							<Button variant="light" onClick={handleSingout}>Signout</Button>
						</ButtonToolbar>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default class NavbarTop extends React.Component {
	render() {
		return (
				<Navbarfunc />
		);
	}
}


