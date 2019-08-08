import React from 'react';
import MaterialTable from 'material-table';
require('dotenv').config();


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
				console.log(users);
			});
	}, []);

	console.log(url);


	const renderTable = () => {
		return users.forEach(user => {
			return (
				<tr>
					<td>{user.username}</td>
					<td>{user.password}</td>
					<td>{user.email}</td>
					<td>{user.country_name}</td>
				</tr>
			)
		})
	}

	return (
		<div>
			{/* <MaterialTable title="Users Table"
				columns={
					users.columns
				}
				data={renderTable()}
				editable={
					{
						onRowAdd: newData =>
							new Promise(resolve => {
								setTimeout(() => {
									resolve();
									const data = [...users.data];
									data.push(newData);
									setUsers({
										...users,
										data
									});
								}, 600);
							}),
						onRowUpdate: (newData, oldData) =>
							new Promise(resolve => {
								setTimeout(() => {
									resolve();
									const data = [...users.data];
									data[data.indexOf(oldData)] = newData;
									setUsers({
										...users,
										data
									});
								}, 600);
							}),
						onRowDelete: oldData =>
							new Promise(resolve => {
								setTimeout(() => {
									resolve();
									const data = [...users.data];
									data.splice(data.indexOf(oldData), 1);
									setUsers({
										...users,
										data
									});
								}, 600);
							}),
					}
				} /> */}
			<table id="users">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Company</th>
					</tr>
				</thead>
				<tbody>{renderTable()}</tbody>
			</table>
		</div>
	);
}