import React from "react";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import Navbar from "./navbar/Navbar";
import './details.css';
const Details = (products) => {
    const location = useLocation();
    const { selectedProduct } = location.state || {};

    const handleCheckout = async () => {

        const { isConfirmed } = await Swal.fire({
          icon: "success",
          title: "Your job application has been successfully submitted!",
          showCancelButton: true,
          confirmButtonText: 'Continue',
        });
      
      };  
    return (
        <>
            <Navbar />
            <div>
                <center>
                    <h2 style={{ padding: "10px", background: "" }}>Product</h2>
                </center>
                <div>
                    <center>
                        <div className="product-list Aa">

                            <div key={selectedProduct.jdUid} className="selectedProduct-card">
                                <img src={selectedProduct.logoUrl} alt={selectedProduct.companyName} />
                                <h3>{selectedProduct.companyName}</h3>
                                <p>{selectedProduct.jobRole}</p>
                                <p>${selectedProduct.minJdSalary} - ${selectedProduct.maxJdSalary}</p>
                                <p>Location: {selectedProduct.location}</p>
                                <p>MinExperience: {selectedProduct.minExp}</p>
                                <p>Job Des: {selectedProduct.jobDetailsFromCompany
                                }</p>
                                
                                <button className="btn btn-green btt" onClick={handleCheckout}>
                                    🔥Easy Apply
                                </button>
                            </div>


                        </div>
                    </center>
                </div>
            </div>
        </>
    );
};

export default Details;
