import React from "react";
import moment from "moment";
const InvoiceTerms = () => {
    const currentDate = moment().format("DD/MM/YYYY")
    return(
        <section className="flex border-b border-neutral-700">
            <div className="w-1/2 border-r border-neutral-700">
               <div className="flex items-center justify-between">
                <p className="text-sm">#</p>
                <p className="w-1/2 text-sm font-semibold">: MADH2806</p>
               </div>
               <div className="flex items-center justify-between">
                <p className="text-sm">Invoice Date</p>
                <p className="w-1/2 text-sm font-semibold">: {currentDate}</p>
               </div>
               <div className="flex items-center justify-between">
                <p className="text-sm">Terms</p>
                <p className="w-1/2 text-sm font-semibold">: Due on Receipt</p>
               </div>
               <div className="flex items-center justify-between">
                <p className="text-sm">Due Date</p>
                <p className="w-1/2 text-sm font-semibold">: {currentDate}</p>
               </div>
            </div>
        </section>
    )
}

export default InvoiceTerms;