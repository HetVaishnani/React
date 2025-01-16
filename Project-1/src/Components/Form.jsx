import { useState } from "react"
import Products from "./Product";
import "./Form.css";

function Form(props) {
    let res = props.het;
    const [pname, setName] = useState("");
    const [pimg, setImg] = useState("");
    const [pprice, setPrice] = useState("");

    const [pdata, setPdata] = useState([])

    const handleAdd = () => {
        let obj = {
            pname,
            pimg,
            pprice
        }

        setPdata([...pdata, obj])


        res = false;
    }

    console.log(pdata);

    return (
        <>
            {res == true ?
                <div className="form-container">
                    <h1>Product Form</h1>
                    <form className="styled-form">
                        <label>Product Name</label>
                        <input
                            type="text"
                            id="product-name"
                            placeholder="Enter Product Name"
                            onChange={(el) => setName(el.target.value)}
                        />

                        <label>Product Image</label>
                        <input
                            type="text"
                            id="product-image"
                            placeholder="Enter Image URL"
                            onChange={(el) => setImg(el.target.value)}
                        />

                        <label>Product Price</label>
                        <input
                            type="text"
                            id="product-price"
                            placeholder="Enter Product Price"
                            onChange={(el) => setPrice(el.target.value)}
                        />

                        <button type="button" onClick={handleAdd}>
                            Add Product
                        </button>
                    </form>
                </div>

                :
                <Products het1={pdata} />
            }
        </>
    )
}

export default Form