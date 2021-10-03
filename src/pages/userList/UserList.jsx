import React,{useState} from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { rows } from '../../db';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function UserList() { 

    const [data,setData]=useState(rows)
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
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlined onClick={()=>{setData(data.filter(item=>item.id!==params.row.id))}} className="userListDelete" />
                    </>
                )
            }
          },
      ];
    return (
        <div className="userList">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
