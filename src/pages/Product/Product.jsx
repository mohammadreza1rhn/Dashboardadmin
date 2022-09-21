import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/Charts/Chart";
import { productData } from "../../datas";
import { useParams } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";
export default function Product() {
  let productParam = useParams();
  let productParamId = productParam.productID;
  console.log(productParam.productID);

  return (
    <div className="produc">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale in Month" data={productData} dataKey="sale" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/images/dell.jpg"
              alt="Dell LAptop"
              className="productInfoImg"
            />
            <span className="productName">Dell Laptop</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name</div>
              <div className="productInfoValue">Dell Laptop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">$900000</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label>product Name</label>
            <input type="text" placeholder="Dell LAptop" />

            <label>In Stock</label>

            <select name="" id="inStock">
              <option>Yes</option>
              <option>No</option>
            </select>
            <label>Active</label>
            <select name="" id="inStock">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img
                src="/images/asus.webp"
                alt="profile photo"
                className="producUploadImg"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>

            <button className="productbtn">Upload(Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
