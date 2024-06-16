import React, { useEffect, useState } from "react";
import "./InvoiceTable.css";
import axios from "axios";

const InvoiceTable = () => {
    const [list, setList] = useState([]);
    const [totalAmt, setTotalAmt] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.get("https://invoice-backend-eta.vercel.app/getinvoice");
                setList(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getList();
    }, []);

    useEffect(() => {
        let totalAmtCalc = 0;
        let percentageCalc = 0;

        list.forEach((item) => {
            totalAmtCalc += parseInt(item.rate, 10);
            percentageCalc += parseInt(item.IGST.IGST_Amt, 10);
        });

        setTotalAmt(totalAmtCalc);
        setPercentage(percentageCalc);
    }, [list]);

    console.log(list, "list");
    console.log(totalAmt, "totalAmt");
    console.log(percentage, "percentage");

    return (
        <section className="w-full">
            <table className="w-full">
                <thead>
                    <tr>
                        <th rowSpan={2}>#</th>
                        <th rowSpan={2}>Item & Description</th>
                        <th rowSpan={2}>Rate</th>
                        <th colSpan={2}>IGST</th>
                        <th rowSpan={2}>Amount</th>
                    </tr>
                    <tr>
                        <th>Percentage</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                {data.items.map((itemList, itemIndex) => (
                                    <p key={itemIndex}>{itemList}</p>
                                ))}
                            </td>
                            <td>{data.rate}</td>
                            <td>{data.IGST.IGST_percentage}</td>
                            <td>{data.IGST.IGST_Amt}</td>
                            <td>{parseInt(data.rate, 10) + parseInt(data.IGST.IGST_Amt, 10)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="w-2/5 ml-auto border border-t-0 border-neutral-700">
                <div className="flex items-center justify-evenly ml-auto w-3/4">
                    <h3 className="w-1/2">Sub Total</h3>
                    <h3 className="w-1/2 text-center">{totalAmt.toFixed(2)}</h3>
                </div>
                <div className="flex items-center justify-evenly ml-auto w-3/4">
                    <h3 className="w-1/2">IGST (18%)</h3>
                    <h3 className="w-1/2 text-center">{percentage.toFixed(2)}</h3>
                </div>
                <div className="flex items-center justify-evenly ml-auto w-3/4">
                    <h3 className="w-1/2">Total</h3>
                    <h3 className="w-1/2 text-center">{(totalAmt + percentage).toFixed(2)}</h3>
                </div>
                <div className="flex items-center justify-evenly ml-auto w-3/4">
                    <h3 className="w-1/2">Balance Due</h3>
                    <h3 className="w-1/2 text-center">{(totalAmt + percentage).toFixed(2)}</h3>
                </div>
            </div>
        </section>
    );
};

export default InvoiceTable;
