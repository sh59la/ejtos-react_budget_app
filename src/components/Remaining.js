import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const belowRemaining = () => {
        alert(
            "You cannot reduce the budget value lower than the spending  £" +
            totalExpenses
        );
    };

    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
            {totalExpenses > budget && belowRemaining()}
        </div>
    );
};

export default Remaining;