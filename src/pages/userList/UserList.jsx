import React from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutlined } from '@material-ui/icons';

export default function UserList() {
    const {REACT_APP_PROFILE_AVATAR}=process.env;

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
            return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="someimg" />
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'E-mail', width: 200 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:params=>{
                return(
                    <>
                        <button className="userListEdit">Edit</button>
                        <DeleteOutlined className="userListDelete" />
                    </>
                )
            }
          },
      ];
      
      const rows = [
        { id: 1, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active",transaction:"$120.00"},
        { id: 2, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active",transaction:"$120.00"},
        { id: 3, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active",transaction:"$120.00"},
        { id: 4, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active",transaction:"$120.00"},
        { id: 5, username: 'Jon Snow',  avatar:REACT_APP_PROFILE_AVATAR, email:"jon@snow.com", status:"active",transaction:"$120.00"},
      ];
      
    return (
        <div className="userList">
            <DataGrid disableSelectionOnClick rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
