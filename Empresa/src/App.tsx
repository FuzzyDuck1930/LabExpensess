import { useState } from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import './App.css';
import ButtonAdd from './components/buttonAdd/buttonAdd';
import ModalContainer from './components/ModalContainer/ModalContainer';

interface AppProps {}

function App(_props: AppProps) {
  const [isBudgetDefined, setIsBudgetDefined] = useState(false);
  const [showBudgetCard, setShowBudgetCard] = useState(true);
  const [showOtherCards, setShowOtherCards] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBudgetDefined = (budgetValue: number) => {
    setIsBudgetDefined(true);
    setShowBudgetCard(false);
    setShowOtherCards(true);
    setShowResetButton(true);
    setBudget(budgetValue);
    setRemaining(budgetValue);
    setShowButtonAdd(true);
  };

  const handleResetApp = () => {
    setIsBudgetDefined(false);
    setShowBudgetCard(true);
    setShowOtherCards(false);
    setShowResetButton(false);
    setBudget(0);
    setRemaining(0);
    setExpenses(0);
    setShowButtonAdd(false);
  };

  const handleExpenseRegistered = (expenseAmount: number) => {
    setExpenses(prevExpenses => prevExpenses + expenseAmount);
    setRemaining(prevRemaining => prevRemaining - expenseAmount);
  };

  const [showButtonAdd, setShowButtonAdd] = useState(false);

  return (
    <>
      <Header showResetButton={showResetButton} onResetApp={handleResetApp}></Header>
      {showBudgetCard && (
        <Cards
          cardTitle="Define budget"
          buttonTxt="DEFINE BUDGET"
          onBudgetDefined={handleBudgetDefined}
          isBudgetDefined={isBudgetDefined}
          cardType="budget"
        />
      )}
      {showOtherCards && (
        <>
          <Cards
            cardTitle="Budget Overview"
            buttonTxt=""
            onBudgetDefined={handleBudgetDefined}
            isBudgetDefined={isBudgetDefined}
            cardType="progress"
            budget={budget}
            remaining={remaining}
            expenses={expenses}
          />
          <Cards cardTitle="" buttonTxt="" onBudgetDefined={handleBudgetDefined} isBudgetDefined={isBudgetDefined} cardType="filter" />
          <Cards cardTitle="" buttonTxt="" onBudgetDefined={handleBudgetDefined} isBudgetDefined={isBudgetDefined} cardType="noExpenses" />
        </>
      )}
      {showButtonAdd && <ButtonAdd onButtonClick={() => setIsModalOpen(true)}></ButtonAdd>}
      <ModalContainer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onExpenseRegistered={handleExpenseRegistered} />
    </>
  );
}

export default App;