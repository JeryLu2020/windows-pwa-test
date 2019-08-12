import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

export default function UsersTable() {
	// const [state, setState] = React.useState({
	// 	columns: [{
	// 		title: 'username',
	// 		field: 'username'
	// 	},
	// 	{
	// 		title: 'password',
	// 		field: 'password'
	// 	},
	// 	{
	// 		title: 'email',
	// 		field: 'email',
	// 	},
	// 	{
	// 		title: 'country_name',
	// 		field: 'country_name',
	// 	},
	// 	],
	// 	data: [{
	// 		username: 'Mehmet',
	// 		password: 'Baran',
	// 		email: 1987,
	// 		country_name: 63
	// 	},
	// 	],
	// });

	let url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/users' : "https://windows-pwa-express.azurewebsites.net/api/users"

	const [users, setUsers] = React.useState([]);
	React.useEffect(() => {
		fetch(url)
			.then(results => results.json())
			.then(users => {
				setUsers(users);
				// console.log(users);
			});
	}, []);

	const renderTable = () => {
		return users.map((user,i) => {
			console.log(user);
			console.log(user.first_name);
			return (
				<tr key={i}>
					<td>{user.first_name}</td>
					<td>{user.email}</td>
					<td>{user.password}</td>
					<td>{user.country_name}</td>
				</tr>
			)
		})
	}

	return (
		<div>
			<table id="users" >
				<thead>
					<tr>
						<th>First_name</th>
						<th>Email</th>
						<th>Password</th>
						<th>Country_name</th>
					</tr>
				</thead>
				<tbody>{renderTable()}</tbody>
			</table>
		</div>
	);
}