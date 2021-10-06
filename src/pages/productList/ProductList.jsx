import { DataGrid } from '@material-ui/data-grid'
import React, {useState} from 'react'
import "./productList.css"
import { productRows } from '../../db';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [data,setData] = useState(productRows)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200, renderCell:(params)=>{
            return(
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="someimg" />
                    {params.row.name}
                </div>
            )
        }},
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:params=>{
                return(
                    <>
                        <Link to={"/product/"+params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlined onClick={()=>{setData(data.filter(item=>item.id!==params.row.id))}} className="userListDelete" />
                    </>
                )
            }
          },
      ];
    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}
