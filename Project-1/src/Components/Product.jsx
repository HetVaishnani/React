import React from 'react'
import "./Product.css"

function products(props) {
    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.het1.map((el, index) => (
                        <tr key={index}>
                            <td>{el.pname}</td>
                            <td>
                                <img
                                    src={el.pimg}
                                    alt={el.pname}
                                    className="product-image"
                                />
                            </td>
                            <td>{el.pprice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default products
