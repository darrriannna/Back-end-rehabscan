import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import Cart from "../components/Cart";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";

function CartPage() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <Cart />
                <Steps />

            </div>

        </>
    )
}

export default CartPage