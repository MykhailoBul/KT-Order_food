import { useEffect, useRef } from 'react';

const Modal = ({ open, children }) => {
    const dialog = useRef();
    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }

        return () => {
            dialog.current.close();
        };
    }, [open]);
    return ( 
        <dialog ref={dialog} className="modal">
            {children}
        </dialog>
    )
}

export default Modal