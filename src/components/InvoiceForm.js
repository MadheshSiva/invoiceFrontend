import React, { useState } from "react";
import { Cancel } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom"
const InvoiceForm = () => {
    const [product, setProduct] = useState({
        item: [],
        rate: ""
    });
    const navigate = useNavigate()
    const [items, setItems] = useState([1]);

    const addItem = () => {
        setItems((prevItems) => [...prevItems, prevItems.length + 1]);
    };

    const handleItemChange = (index, value) => {
        setProduct((prev) => {
            const newItems = [...prev.item];
            newItems[index] = value;
            return { ...prev, item: newItems };
        });
    };

    const removeItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setProduct((prev) => {
            const newItems = prev.item.filter((_, i) => i !== index);
            return { ...prev, item: newItems };
        });
    };

    const createList = async (e) => {
        e.preventDefault();
        console.log(product, "item35")
        const rate = parseInt(product.rate)
        const IGSTAmt = (rate / 100) * 18
        //    console.log(IGSTAmt,"3666")

        const bodyContent = {
            items: product.item,
            rate: product.rate + ".00",
            IGST_percentage: "18%",
            IGST_Amt: IGSTAmt + ".00"
        }

        console.log(bodyContent, "content44")
        try {
            const product = await axios.post("https://invoice-backend-eta.vercel.app/createinvoice", bodyContent).then((res) => {
                navigate(-1)
                console.log(res, "res499")
            }).catch((err) => {
                console.log(err, "err51")
            })
            //    console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="w-3/4 mx-auto">
            <div>
                <h1 className="text-xl font-semibold text-center">Create Invoice</h1>
            </div>
            <h1
                role="button"
                tabIndex={0}
                className="bg-[#FEEF62] text-neutral-800 text-sm font-semibold py-[1em] ml-auto rounded-lg w-1/5 text-center"
                onClick={addItem}
            >
                Add items
            </h1>
            <form className="w-1/2 mx-auto" onSubmit={createList}>
                <div className="grid grid-cols-2 gap-2">
                    {items.map((data, index) => (
                        <div key={data}>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-blue-600 font-semibold">Item {data}</p>
                                <span onClick={() => removeItem(index)}>
                                    <Cancel className="text-red-500 cursor-pointer" />
                                </span>
                            </div>
                            <input
                                type="text"
                                className="focus:outline-none border-b border-neutral-400 w-full text-sm capitalize"
                                onChange={(e) => handleItemChange(index, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
                <div className="my-3">
                    <p className="text-sm text-blue-600 font-semibold">Rate</p>
                    <input
                        type="text"
                        onChange={(e) => setProduct((prev) => ({ ...prev, rate: e.target.value }))}
                        className="focus:outline-none border-b border-neutral-400 w-1/2 text-sm capitalize"
                    />
                </div>
                <input
                    type="submit"
                    className="px-[2em] py-[0.5em] bg-[#07B151] border-[#07B151] cursor-pointer text-sm text-white font-semibold rounded-lg"
                    name="Create"
                    value="Create"
                />
            </form>
        </section>
    );
};

export default InvoiceForm;
