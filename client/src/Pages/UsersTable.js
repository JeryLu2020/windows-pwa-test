import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";

class UsersTable extends React.Component {
  render() {
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
      <MUIDataTable
        title={"Users List"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default UsersTable;

// Datatables for React using Material-UI 
// - https://www.material-ui-datatables.com
// - GitHub https://github.com/gregnb/mui-datatables