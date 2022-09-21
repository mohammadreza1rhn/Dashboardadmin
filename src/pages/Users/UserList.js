import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userRows } from "../../datas";
import "./UserList.css";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export default function UserList() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userId) => {
    setUserDatas(userDatas.filter((user) => user.id != userId));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="/" className="link">
              <div className="userListUser">
                <img src={params.row.avatar} alt="" className="userListImg" />
                {params.row.username}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => {
                userDelete(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}
