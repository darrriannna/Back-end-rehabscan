import { supabase } from "../utils/supabaseClient";

async function saveBooking(bookingData) {
    const { data, error } = await supabase
        .from("bookings")
        .insert([bookingData]);

    if (error) {
        console.error("Error saving booking:", error);
        return false;
    }
    return data;
}
