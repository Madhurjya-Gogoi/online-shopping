import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
// import "../App.css"


function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);
    const renderlist = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="list" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            
        )
    })

    return (
        <div>
            {renderlist}
        </div>
    )
}

export default ProductComponent
