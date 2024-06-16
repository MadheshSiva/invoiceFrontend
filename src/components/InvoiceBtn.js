import React from "react";
import {useNavigate} from "react-router-dom"
const InvoiceBtn = () => {
    const navigate = useNavigate()
    const eventHanduler = () => {
       navigate("/invoiceform")
    }

    return(
        <section className="flex justify-center my-6">
            <button className="bg-[#375AA2] border-[#375AA2] px-[2em] py-[0.5em] text-lg rounded-md text-white" onClick={eventHanduler}>Create</button>
        </section>
    )
}

export default InvoiceBtn;