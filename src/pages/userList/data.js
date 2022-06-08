import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const userColumns = [
	{ field: "id", headerName: "ID", width: 50 },
	{
		field: "user",
		headerName: "User",
		width: 200,
		renderCell: (parameters) => {
			return (
				<div className="userListCell">
					<img className="userListAvatar" src={parameters.row.avatar} alt="" />
					{parameters.row.username}
				</div>
			);
		},
	},
	{ field: "email", headerName: "Email", width: 200 },
	{
		field: "status",
		headerName: "Status",
		width: 160,
		renderCell: (parameters) => {
			return (
				<div className="userListCell">
					{parameters.row.status}
					<FiberManualRecordIcon className="userListStatus" />
				</div>
			);
		},
	},
	{ field: "transaction", headerName: "Transaction", width: 160 },
	{
		field: "action",
		headerName: "Actions",
		width: 160,
		renderCell: () => {
			return (
				<div className="userListCell">
					<Button className="userListEdit">Edit</Button>
					<DeleteOutlineIcon className="userListDelete" />
				</div>
			);
		},
	},
];

export const userRows = [
	{
		id: 1,
		username: "John Snow",
		avatar:
			"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 2,
		username: "Johny Depp",
		avatar:
			"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 3,
		username: "Chris Evans",
		avatar:
			"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 4,
		username: "Henric Avil",
		avatar:
			"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 5,
		username: "Emma Watson",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 6,
		username: "Mila Kunis",
		avatar:
			"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 7,
		username: "Jeniffer Lopez",
		avatar:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 8,
		username: "Dwayne Johnson",
		avatar:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 9,
		username: "Samuel L.Jackson",
		avatar:
			"https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
	{
		id: 10,
		username: "Jesse Pinkman",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "active",
		transaction: "$120",
	},
];
