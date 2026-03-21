import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import Cart from "../components/Cart";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import FAQGroups from "../components/FAQ";

function CartPage() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <Cart />
                <Steps />
                <FAQGroups />
                <Footer />
            </div>

        </>
    )
}

export default CartPage