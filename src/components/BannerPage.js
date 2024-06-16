import React from "react";
import logo from "../images/logo.png"
const BannerPage = () => {

    return (
        <section className="border-b pb-2 border-neutral-700">
            <div className="flex justify-between mx-5">
                <div className="flex items-center gap-8">
                    <img src={logo} alt="" />
                    <div>
                      <address>
                        <pre>
                            <h2 className="text-lg ">SIGMA COMPUTERS</h2>
                            <p className="text-sm">B-72, New Greenpark Avenue,</p>
                            <p className="text-sm">Omalur Main Road,</p>
                            <p className="text-sm">Salem Tamil Nadu 636007.</p>
                            <p className="text-sm">India </p>
                            <p className="text-sm">GSTIN <span>33AAIPE0960F1Z7</span></p>

                        </pre>
                      </address>
                    </div>
                </div>
                <h2 className="text-2xl mt-auto tracking-wide font-semibold ">TAX INVOICE</h2>
            </div>

        </section>
    )
}

export default BannerPage;