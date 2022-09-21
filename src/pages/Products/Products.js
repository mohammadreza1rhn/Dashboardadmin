import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { products } from "../../datas";
import "./Products.css";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export default function UserList() {
  const [productsDatas, setProductsDatas] = useState(products);

  const productDelete = (productID) => {
    setProductsDatas(
      productsDatas.filter((product) => product.id != productID)
    );
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <div className="userListUser">
                <img src={params.row.avatar} alt="" className="userListImg" />
                {params.row.title}
              </div>
            </Link>
          </>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => {
                productDelete(params.row.id);
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
        rows={productsDatas}
        columns={columns}
        pageSize={3}
        disableSelectionOnClick
      />
    </div>
  );
}
