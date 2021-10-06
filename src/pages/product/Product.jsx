import { Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import  Chart from "../../components/chart/Chart"
import { productData } from '../../db'
import "./product.css"

export default function Product() {
    const {REACT_APP_PROFILE_AVATAR}=process.env;

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={REACT_APP_PROFILE_AVATAR} alt="someImg" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales</span>
                            <span className="productInfoValue">6123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="nol">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="nol">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={REACT_APP_PROFILE_AVATAR} alt="someimg" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>    
            </div>            
        </div>
    )
}
