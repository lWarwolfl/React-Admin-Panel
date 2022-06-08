import './userList.css'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from './data';

export default function UserList() {
  return (
		<div className="userList">
			<div style={{ height: 530, width: "100%" }}>
				<DataGrid
					rows={userRows}
					columns={userColumns}
					pageSize={8}
					rowsPerPageOptions={[8]}
				  checkboxSelection
				  disableSelectionOnClick
				/>
		  </div>
		</div>
	);
}

