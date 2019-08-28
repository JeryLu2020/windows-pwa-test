import React from 'react';
import { Table } from 'react-bootstrap';

export default function UsersTable() {
	let url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/users' : "https://windows-pwa-express.azurewebsites.net/api/users"

	const [users, setUsers] = React.useState([]);

	// use react hook to fetch all the user data from Express API
	React.useEffect(() => {
		fetch(url)
			.then(results => results.json())
			.then(users => {
				setUsers(users);
				// console.log(users);
			});
	}, []);

	const renderTable = () => {
		return users.map((user, i) => {
			// console.log(user);
			// console.log(user.first_name);
			return (
				<tr key={i}>
					<td>{user.first_name}</td>
					<td>{user.email}</td>
					<td>{user.password}</td>
					<td>{user.country_name}</td>
					<td>{user.city_name}</td>
					<td>{user.state_name}</td>
					<td>{user.company_address}</td>
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
					</tr>
				</thead>
				<tbody>{renderTable()}</tbody>
			</Table>
		</div>
	);
}