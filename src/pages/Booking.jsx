import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductsCarousel";
import TestCarousel from "../components/TestCarousel";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import BookingForm from "../components/BookingForm";

function BookingPage() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <BookingForm />
                <Steps />
                <TestCarousel />
                <ProductCarousel />
            </div>

        </>
    )
}

export default BookingPage