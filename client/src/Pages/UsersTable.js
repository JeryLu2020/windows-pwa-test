import React from "react";
import MUIDataTable from "mui-datatables";

var UsersURL = "http://localhost:5000/users";
var message;

class UsersTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			nickname: ''
		};
		this.sendReq = this.sendReq.bind(this);
	}

	sendReq() {
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", UsersURL, true);
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.onload = (res) => {
			// console.log(res['target']['response']);
			var result = res['target']['response'];
			message = JSON.parse(JSON.stringify(result));
			console.log(message);
			document.getElementById("response").innerHTML = message;
		}
		xhttp.send();
	}

	componentWillMount() {
		this.sendReq();
	}

	render() {
		const ref = React.createRef();

		const columns = ["Name", "Title", "Location", "Age", "Salary"];

		const data = [
			["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
			["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
			["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
			["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
			["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
			["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
			["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
		];

		const options = {
			filterType: "dropdown",
			responsive: "scroll"
		};

		return (
			<div>
				<MUIDataTable
					ref={ref}
					title={"Users List"}
					data={data}
					columns={columns}
					options={options}
				/>
				<div>
					<h4 id="response">{this.message}</h4>
				</div>
			</div>
		);
	}
}

export default UsersTable;

// Datatables for React using Material-UI 
// - https://www.material-ui-datatables.com
// - GitHub https://github.com/gregnb/mui-datatables