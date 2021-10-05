import { DataGrid } from '@material-ui/data-grid'
import React from 'react'
import "./productList.css"
import { productRows } from '../../db';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function ProductList() {
    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}
