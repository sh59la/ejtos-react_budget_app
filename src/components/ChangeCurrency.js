import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value; // No need for parseFloat, as it's a string
        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency,
        });
    };

    return (
        <div className="alert alert-secondary" style={{ backgroundColor: 'lightgreen' }}>
            <select
                style={{ backgroundColor: 'lightgreen', color: 'white', border: 'none' }}
                className="custom-select"
                id="inputGroupSelect02"
                onChange={handleCurrencyChange}
                value={currency} // Set the value of the select based on the currency
            >
                <option value="$"> Currency ($ Dollar) </option>
                <option value="£"> Currency (£ Pound) </option>
                <option value="€"> Currency (€ Euro) </option>
                <option value="₹"> Currency (₹ Ruppee) </option>
            </select>
        </div>
    );
};

export default Currency;