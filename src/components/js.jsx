import React, { useState } from "react";
import "./Faq.css";

function Booking() {
  const [activeTab, setActiveTab] = useState("Outstation"); 

  return (
    <div className="booking">
      <div className="row">
        <div className="col-2">
          <h6>BOOK NOW</h6>
          <h1>IntrCitiCabs</h1>
          <div className="flex flex-row gap-1 ml-2">
            <button
              className={`tablinks ${
                activeTab === "Outstation" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Outstation")}
            >
              Outstation
            </button>
            <button
              className={`tablinks ${
                activeTab === "RoundTrip" ? "active" : ""
              }`}
              onClick={() => setActiveTab("RoundTrip")}
            >
              Round Trip
            </button>
            <button
              className={`tablinks ${activeTab === "Local" ? "active" : ""}`}
              onClick={() => setActiveTab("Local")}
            >
              Local
            </button>
            <button
              className={`tablinks ${activeTab === "Airport" ? "active" : ""}`}
              onClick={() => setActiveTab("Airport")}
            >
              Airport
            </button>
          </div>
          <div className="form flex flex-col mx-2 bg-white rounded-3xl">
            {activeTab === "Outstation" && (
              <>
                <input
                  className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10"
                  type="text"
                  placeholder="Enter pickup city (Outstation)"
                />
              </>
            )}
            {activeTab === "RoundTrip" && (
              <>
                <input
                  className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10"
                  type="text"
                  placeholder="Enter pickup city (Round Trip)"
                />
              </>
            )}
            {activeTab === "Local" && (
              <>
                <input
                  className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10"
                  type="text"
                  placeholder="Enter pickup city (Local)"
                />
              </>
            )}
            {activeTab === "Airport" && (
              <>
                <input
                  className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4 mt-10"
                  type="text"
                  placeholder="Enter pickup location (Airport)"
                />
              </>
            )}
          </div>
          <div className="form flex flex-col mx-2 bg-white rounded-3xl">
            <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="text"
              placeholder="Enter destination city/location"
            />
          
            <input
              className="block px-[15px] py-[15px] mb-[10px] bg-[#dedede] text-base rounded-md mx-4"
              type="tel"
              placeholder="Enter mobile no."
            />
            <a href="/cars" className="rounded-xl">
              <button type="submit">Search Cabs</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;