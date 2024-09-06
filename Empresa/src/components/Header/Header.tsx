    import "./Header.css"

    interface HeaderProps {
    showResetButton?: boolean;
    onResetApp: () => void;
    }

    function Header({ showResetButton = false, onResetApp }: HeaderProps) {
    return (
        <header id="myHeader">
        <div id="HeaderSpace">
            <h1 id="HeaderTxt">Expense Planner</h1>
            {showResetButton && (
            <button id="headerBttn" onClick={onResetApp}>RESET APP</button>
            )}
        </div>
        </header>
    );
    }

    export default Header;