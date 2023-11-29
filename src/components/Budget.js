import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudget = parseFloat(event.target.value);
        dispatch({
            type: "SET_BUDGET",
            payload: newBudget,
        });
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget:{currency}<input required type="number" id="cost" value={budget} onChange={handleBudgetChange} max="5"/></span>
        </div>
    );
};

export default Budget;