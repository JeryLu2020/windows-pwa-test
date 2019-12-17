import React from 'react';
import { Table, Button, ButtonGroup, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'; // axios is a http request module

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

	const [show0, setShow0] = React.useState({
		show0: false,
		activeModal0: null
	});
	const handleShow0 = (e, index) => setShow0({
		show: true,
		activeModal0: index,
	});
	const handleClose0 = () => setShow0({
		show: false,
		activeModal0: null,
	});

	// use react hook to fetch all the user data from Express API
	React.useEffect(() => {
		fetch(url)
			.then(results => results.json())
			.then(users => {
				setUsers(users);
				// console.log(users);
			});
	}, [url]);
	// handle delete record.
	const [showdelete, SetShowdelete] = React.useState({
		showdelete: false,
		activedelete: null
	});
	const handleShowdelete = (e, index) => SetShowdelete({
		showdelete: true,
		activedelete: index
	});
	const handleClosedelete = () => SetShowdelete({
		showdelete: false,
		activedelete: null
	});
	// send request to express delete api and delete the data due to Mongo index ID. findByIdAndRemove()
	function deleteRecord(e, id) {
		console.log(id);
		console.log(url + '/delete/' + id);
		axios({ 				// send POST request to the delete api
			method: 'post',
			url: url + '/delete/' + id,
			query: {
				Id: id,
			}
		})
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					console.log("delete success"); // login success
					window.location.reload();
				} else {
					console.log("delete failed");
					window.location.reload();
				}
			})
			.catch(err => {
				console.log(err);
				window.location.reload();
			})
	}

	// set from info
	const [modifyuser, setModifyuser] = React.useState({
		_id:'',
		email: '',
		password: '',
		first_name: '',
		country_name: '',
		city_name: '',
		state_name: '',
	})

	// create form submit
	const modifyRecord = (e, userid) => {
		e.preventDefault();
		console.log(modifyuser);

		var user = document.getElementById(userid).elements;
		console.log(user._id.value);
		console.log(user.email.value);
		console.log(user.email.placeholder);
		console.log(user.password.value);
		console.log(user.first_name.value);
		console.log(user.country_name.value);
		console.log(user.city_name.value);
		console.log(user.state_name.value);
		console.log(url + '/edit/' + user._id.value);
		
		// axios call to express create user
		axios({
			method: 'post',
			url: url + '/edit/' + user._id.value,
			data: {
				_id: user._id.value,
				email: (modifyuser.email === "")? user.email.placeholder : modifyuser.email,
				password: (modifyuser.password === "")? user.password.placeholder : modifyuser.password,
				first_name: (modifyuser.first_name === "")? user.first_name.placeholder : modifyuser.first_name,
				country_name: (modifyuser.country_name === "")? user.country_name.placeholder : modifyuser.country_name,
				city_name: (modifyuser.city_name === "")? user.city_name.placeholder : modifyuser.city_name,
				state_name: (modifyuser.state_name === "")? user.state_name.placeholder : modifyuser.state_name,
			}
		})
		.then(res => {
			if (res.status === 200) {
				console.log("modify success");
				window.location.reload();
			} else {
				console.log("modify failed");
				// history.push('/#/error');
				window.location.reload();
			}
		})
		.catch(err => {
			console.log(err);
			window.location.reload();
		})
	};
	// match form name properity with the input value
	const updateValue = (e) => {
		console.log(e.target.value);
		setModifyuser({
			...modifyuser,
			[e.target.name]: e.target.value,
		});
	};

	const renderTable = () => {
		return users.map((user) => {
			// console.log(user);
			return (
				<tr key={user._id}>
					<td>
						<p className="text-primary" onClick={e => handleShow0(e, user._id)}>{user.first_name}</p>
						<Modal show={show0.activeModal0 === user._id} onHide={handleClose0} animation={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
							<Modal.Header closeButton>
								<Modal.Title>Details</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form id={user._id}>
									<Form.Group as={Row} controlId="formPlaintextId">
										<Form.Label column sm="2">ID</Form.Label>
										<Col sm="10">
											<Form.Control readOnly type='text' placeholder={user._id} value={user._id} name="_id" />
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formPlaintextEmail">
										<Form.Label column sm="2">Email</Form.Label>
										<Col sm="10">
											<Form.Control readOnly type='text' placeholder={user.email} value={user.email} name="email" />
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formPlaintextPassword">
										<Form.Label column sm="2">Password</Form.Label>
										<Col sm="10">
											<Form.Control readOnly type='password' placeholder={user.password} value={user.password} name="password"/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formPlaintextFirstName">
										<Form.Label column sm="2">First Name</Form.Label>
										<Col sm="10">
											<Form.Control readOnly type='text' placeholder={user.first_name} value={user.first_name} name="first_name"/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formPlaintextCountry">
										<Form.Label column sm="2">Country Name</Form.Label>
										<Col sm="10">
											<Form.Control readOnly type='text' placeholder={user.country_name} value={user.country_name} name="country_name"/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formPlaintextCity">
										<Form.Label column sm="2">City Name</Form.Label>
										<Col sm="10">
											<Form.Control readOnly type='text' placeholder={user.city_name} value={user.city_name} name="city_name"/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} controlId="formPlaintextState">
										<Form.Label column sm="2">State Name</Form.Label>
										<Col sm="10">
											<Form.Control readOnly type='text' placeholder={user.state_name} value={user.state_name} name="state_name"/>
										</Col>
									</Form.Group>
								</Form>
							</Modal.Body>
						</Modal>
					</td>
					<td>{user.email}</td>
					<td>{user.password}</td>
					<td>{user.country_name}</td>
					<td>{user.city_name}</td>
					<td>{user.state_name}</td>
					<td>{user.company_address}</td>
					<td>
						<ButtonGroup aria-label="Basic example">
							<Button size="sm" variant="primary" onClick={e => handleShow(e, user._id)}>Modify</Button>
							<Modal show={show.activeModal === user._id} onHide={handleClose} animation={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
								<Modal.Header closeButton>
									<Modal.Title>Modify</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form id={user._id} onSubmit={e => modifyRecord(e, user._id)}>
										<Form.Group as={Row} controlId="formPlaintextId">
											<Form.Label column sm="2">ID</Form.Label>
											<Col sm="10">
												<Form.Control readOnly type='text' placeholder={user._id} value={user._id} name="_id" />
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formPlaintextEmail">
											<Form.Label column sm="2">Email</Form.Label>
											<Col sm="10">
												<Form.Control type='text' placeholder={user.email} value={modifyuser.email} name="email" onChange={e => updateValue(e)}/>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formPlaintextPassword">
											<Form.Label column sm="2">Password</Form.Label>
											<Col sm="10">
												<Form.Control type='password' placeholder={user.password} value={modifyuser.password} name="password" onChange={e => updateValue(e)}/>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formPlaintextFirstName">
											<Form.Label column sm="2">First Name</Form.Label>
											<Col sm="10">
												<Form.Control type='text' placeholder={user.first_name} value={modifyuser.first_name} name="first_name" onChange={e => updateValue(e)}/>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formPlaintextCountry">
											<Form.Label column sm="2">Country Name</Form.Label>
											<Col sm="10">
												<Form.Control type='text' placeholder={user.country_name} value={modifyuser.country_name} name="country_name" onChange={e => updateValue(e)}/>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formPlaintextCity">
											<Form.Label column sm="2">City Name</Form.Label>
											<Col sm="10">
												<Form.Control type='text' placeholder={user.city_name} value={modifyuser.city_name} name="city_name" onChange={e => updateValue(e)}/>
											</Col>
										</Form.Group>
										<Form.Group as={Row} controlId="formPlaintextState">
											<Form.Label column sm="2">State Name</Form.Label>
											<Col sm="10">
												<Form.Control type='text' placeholder={user.state_name} value={modifyuser.state_name} name="state_name" onChange={e => updateValue(e)}/>
											</Col>
										</Form.Group>
									</Form>
								</Modal.Body>
								<Modal.Footer>
									<Button form={user._id} type='submit' variant="primary" >Submit</Button>
								</Modal.Footer>
							</Modal>
						</ButtonGroup>
						<ButtonGroup>
							<Button size="sm" variant="danger" onClick={e => handleShowdelete(e, user._id)}>Delete</Button>
							<Modal show={showdelete.activedelete === user._id} onHide={handleClosedelete} animation={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
								<Modal.Header variant="danger" closeButton bg="danger">
									<Modal.Title>Delete</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<p>user email is: {user.email}</p>
								</Modal.Body>
								<Modal.Footer>
									<Button type='button' variant="danger" onClick={e => deleteRecord(e, user._id)}>Delete</Button>
								</Modal.Footer>
							</Modal>
						</ButtonGroup>
					</td>
				</tr>
			)
		})
	}


	// create record
	const [showcreate, setShowcreate] = React.useState(false);

	const handleShowcreate = () => {
		setShowcreate(true);
	}
	const handleClosecreate = () => {
		setShowcreate(false);
	}
	// set from info
	const [newuser, setNewuser] = React.useState({
		_id:'',
		email: '',
		password: '',
		first_name: '',
		country_name: '',
		city_name: '',
		state_name: '',
	})
	// create form submit
	const createRecord = e => {
		e.preventDefault();
		console.log(newuser);
		// axios call to express create user
		axios({
			method: 'POST',
			url: "https://js-function-jery.azurewebsites.net/api/HttpTrigger-PWAfunction-Create?code=sVx6jdiHXHUIa3nyqDEJOX9nJ0maawVfb6KipAg3ECZ6zlkKfeuy4A==",
			data: {
				email: newuser.email,
				password: newuser.password,
				first_name: newuser.first_name,
				country_name: newuser.country_name,
				city_name: newuser.city_name,
				state_name: newuser.state_name,
			}
		})
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					console.log("create success");
					window.location.reload();
				} else if(res.status == 300 ){
					console.log("email exist, please use another email");
					window.alert("email exist, please use another email");
				} else {
					console.log("create failed");
					window.location.reload();
				}
			})
			.catch(err => {
				console.log(err);
			})
	};
	// match form name properity with the input value
	const updateField = e => {
		setNewuser({
			...newuser,
			[e.target.name]: e.target.value
		});
	};

	const createData = () => {
		return (
			<div>
				<ButtonGroup aria-label="Basic example">
					<Button size="lg" variant="success" onClick={handleShowcreate}>Create</Button>
					<Modal show={showcreate} onHide={handleClosecreate} animation={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
						<Modal.Header closeButton>
							<Modal.Title>Create</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form id='createuser' onSubmit={createRecord}>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">Email</Form.Label>
									<Col sm="10">
										<Form.Control type='text' placeholder="sample@sample.com" value={newuser.email} name="email" onChange={updateField}/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPassword">
									<Form.Label column sm="2">Password</Form.Label>
									<Col sm="10">
										<Form.Control type='password' placeholder="" value={newuser.password} name="password" onChange={updateField}/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPassword">
									<Form.Label column sm="2">First Name</Form.Label>
									<Col sm="10">
										<Form.Control type='text' placeholder="" value={newuser.first_name} name="first_name" onChange={updateField}/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPassword">
									<Form.Label column sm="2">Country Name</Form.Label>
									<Col sm="10">
										<Form.Control type='text' placeholder="" value={newuser.country_name} name="country_name" onChange={updateField}/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPassword">
									<Form.Label column sm="2">City Name</Form.Label>
									<Col sm="10">
										<Form.Control type='text' placeholder="" value={newuser.city_name} name="city_name" onChange={updateField}/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId="formPlaintextPassword">
									<Form.Label column sm="2">State Name</Form.Label>
									<Col sm="10">
										<Form.Control type='text' placeholder="" value={newuser.state_name} name="state_name" onChange={updateField}/>
									</Col>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button form='createuser' type='submit' variant="success" >Submit</Button>
						</Modal.Footer>
					</Modal>
				</ButtonGroup>
			</div>
		)
	}

	return (
		<div>
			{createData()}
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