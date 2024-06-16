import React from "react";
import BannerPage from "./BannerPage";
import InvoiceTerms from "./InvoiceTerms";
import BillTo from "./BillTo";
import InvoiceTable from "./InvoiceTable";
import InvoiceBtn from "./InvoiceBtn";
const HomePage = () => {

    return (
        <main className="mt-4">
            <InvoiceBtn />
            <div className="w-4/5 mx-auto">
                <BannerPage />
                <InvoiceTerms />
                <BillTo />
                <InvoiceTable />
            </div>

        </main>

    )
}

export default HomePage;