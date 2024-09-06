    import { useState } from "react";
    import 'react-circular-progressbar/dist/styles.css';
    import "./Cards.css"
    import CircularProgressbarComponent from "../ProgressBar/ProgressBar";

    interface CardsProps {
    cardTitle: string;
    buttonTxt: string;
    onBudgetDefined: (budgetValue: number) => void;
    isBudgetDefined: boolean;
    cardType: 'budget' | 'progress' | 'filter' | 'noExpenses';
    budget?: number;
    remaining?: number;
    expenses?: number;
    }

    function Cards({ cardTitle, buttonTxt, onBudgetDefined, cardType, budget, remaining, expenses }: CardsProps) {
        const [inputValue, setInputValue] = useState(0);
        const [selectedOption, setSelectedOption] = useState('');

        const handleInputChange = (e: any) => {
            setInputValue(e.target.value);
        };

        const handleButtonClick = () => {
            if (inputValue > 0) {
                onBudgetDefined(inputValue);
            }
        };

        const handleOptionChange = (e: any) => {
            setSelectedOption(e.target.value);
        };

        return (
            <div id="cardSpace">
                {cardType === 'budget' && (
                    <>
                        <h1>{cardTitle}</h1>
                        <input defaultValue="0" min="0" max="100" type="number" onChange={handleInputChange} />
                        <button disabled={inputValue <= 0} onClick={handleButtonClick}>{buttonTxt}</button>
                    </>
                )}
                {cardType === 'progress' && (
                    <div>
                        <CircularProgressbarComponent percentage={(expenses! / budget!) * 100}></CircularProgressbarComponent>
                        <h3>Budget: ${budget}</h3>
                        <h3>Remaining: ${remaining}</h3>
                        <h3>Expense: ${expenses}</h3>
                    </div>
        )}
        {cardType === 'filter' && (
            <div>
            <p>Filter categories</p>
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
            </div>
        )}
        {cardType === 'noExpenses' && (
            <div>
            <h3>No expenses...</h3>
            </div>
        )}
        </div>
    );
    }

    export default Cards;