
    import Modal from '../Modal/Modal';
    import "./ModalContainer.css"

    interface ModalContainerProps {
    isOpen: boolean;
    onClose: () => void;
    onExpenseRegistered: (expenseAmount: number) => void;
    }

    function ModalContainer({ isOpen, onClose, onExpenseRegistered }: ModalContainerProps) {
    if (!isOpen) return null;

    return (
        <div className="modal-container" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Modal onExpenseRegistered={onExpenseRegistered} />
        </div>
        </div>
    );
    }

    export default ModalContainer;