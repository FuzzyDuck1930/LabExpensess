    import { useState } from "react";

    interface ModalProps {
    onExpenseRegistered: (expenseAmount: number) => void;
    }

    function Modal({ onExpenseRegistered }: ModalProps) {
    const [amount, setAmount] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    const handleAmountChange = (e: any) => {
        setAmount(Number(e.target.value));
    };

    const handleRegisterExpense = () => {
        if (amount > 0) {
        onExpenseRegistered(amount);
        } else {
        alert("Please enter a valid amount");
        }
    };

    return (
        <div>
        <h3>Expense Name:</h3>
        <input type="text" />
        <h3>Amount:</h3>
        <input type="number" onChange={handleAmountChange} />
        <h3>Category:</h3>
        <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">-- All categories --</option>
            <option value="option1">Savings</option>
            <option value="option2">Food</option>
            <option value="option3">House</option>
            <option value="option4">Miscellaneous Expenses</option>
            <option value="option5">Leisure</option>
            <option value="option6">Health</option>
            <option value="option7">Subscriptions</option>
        </select>
        <h3>Expense Date:</h3>
        <input type="date" />
        <button onClick={handleRegisterExpense}>REGISTER EXPENSES</button>
        </div>
    );
    }

    export default Modal;