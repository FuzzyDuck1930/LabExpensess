import "./buttonAdd.css"

interface ButtonAddProps {
    onButtonClick: () => void;
}

function ButtonAdd({ onButtonClick }: ButtonAddProps) {
    return <button onClick={onButtonClick}>+</button>;
}

export default ButtonAdd;