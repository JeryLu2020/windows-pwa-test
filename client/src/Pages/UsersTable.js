import React, { useState } from 'react';
import { Table, Button, ButtonGroup, Modal, Form, Row, Col} from 'react-bootstrap';

export default function UsersTable() {
	let url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/users' : "https://windows-pwa-express.azurewebsites.net/api/users"

	const [users, setUsers] = React.useState([]);
	// modify button modal
	const [show, setShow] = React.useState({
		show: false,
		activeModal: null
	});

	const handleShow = (e, index) => setShow({
		show: true,
		activeModal: index,
	});
	const handleClose = () => setShow({
		show: false,
		activeModal: null,
	});

	// use react hook to fetch all the user data from Express API
	React.useEffect(() => {
		fetch(url)
			.then(results => results.json())
			.then(users => {
				setUsers(users);
				// console.log(users);
			});
	}, []);

	let style = {
		background: 'rgba(0, 0, 0, .45)',
	}

	const renderTable = () => {
		return users.map((user) => {
			// console.log(user);
			// console.log(user._id)
			return (
				<tr key={user._id}>
					<td>{user.first_name}</td>
					<td>{user.email}</td>
					<td>{user.password}</td>
					<td>{user.country_name}</td>
					<td>{user.city_name}</td>
					<td>{user.state_name}</td>
					<td>{user.company_address}</td>
					<td>
						<ButtonGroup aria-label="Basic example">
							<Button id={user._id} size="sm" variant="primary" onClick={e => handleShow(e, user._id)}>Modify</Button>
								<Modal id={user._id} show={show.activeModal === user._id} onHide={handleClose} animation={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered style={style}>
									<Modal.Header closeButton>
										<Modal.Title>Details</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form>
											<Form.Group as={Row} controlId="formPlaintextEmail">
												<Form.Label column sm="2">Email</Form.Label>
												<Col sm="10">
													<Form.Control type='text' readOnly placeholder={user.email} />
												</Col>
											</Form.Group>
											<Form.Group as={Row} controlId="formPlaintextPassword">
												<Form.Label column sm="2">Password</Form.Label>
												<Col sm="10">
													<Form.Control type='text' placeholder={user.password} />
												</Col>
											</Form.Group>
											<Form.Group as={Row} controlId="formPlaintextPassword">
												<Form.Label column sm="2">First Name</Form.Label>
												<Col sm="10">
													<Form.Control type='text' placeholder={user.first_name} />
												</Col>
											</Form.Group>
											<Form.Group as={Row} controlId="formPlaintextPassword">
												<Form.Label column sm="2">Country Name</Form.Label>
												<Col sm="10">
													<Form.Control type='text' placeholder={user.country_name} />
												</Col>
											</Form.Group>
											<Form.Group as={Row} controlId="formPlaintextPassword">
												<Form.Label column sm="2">City Name</Form.Label>
												<Col sm="10">
													<Form.Control type='text' placeholder={user.city_name} />
												</Col>
											</Form.Group>
											<Form.Group as={Row} controlId="formPlaintextPassword">
												<Form.Label column sm="2">State Name</Form.Label>
												<Col sm="10">
													<Form.Control type='text' placeholder={user.state_name} />
												</Col>
											</Form.Group>
										</Form>
									</Modal.Body>
									<Modal.Footer>
										<Button type='button' variant="primary" >
											Go
										</Button>
									</Modal.Footer>
								</Modal>
							<Button size="sm" variant="danger">Delelte</Button>
						</ButtonGroup>
					</td>
				</tr>
			)
		})
	}

	return (
		<div>
			<Table responsive >
				<thead>
					<tr>
						<th>First_name</th>
						<th>Email</th>
						<th>Password</th>
						<th>Country_name</th>
						<th>city_name</th>
						<th>state_name</th>
						<th>company_address</th>
						<th>Operations</th>
					</tr>
				</thead>
				<tbody>
					{renderTable()}
				</tbody>
			</Table>
		</div>
	);
}


// https://medium.com/@BogdanSoare/how-to-use-reacts-new-context-api-to-easily-manage-modals-2ae45c7def81