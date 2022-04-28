import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProductComponent.css'

const ProductComponet = () => {
  const products = useSelector((state) => state.allProducts.products);

  // const {id,title}=products[0];
  const renderList = products.map((product) => {
    const { id, title, image, price, catagory } = product;
    return (
      <div className="four column wide" style={{width:250}} key={id}>
       <Link to={`/product/${id}`}>
        <div className="ui link cards" >
          <div className="card" >
            <div className="image">
              <img src={image} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta ">{catagory}</div>
            </div>
          </div>
        </div>
    </Link>
      </div>
    );
  });
  return (<>{renderList}</>);
};

export default ProductComponet;
