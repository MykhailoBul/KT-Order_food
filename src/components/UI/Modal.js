import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, children }) => {
    const dialog = useRef();
    useEffect(() => {
        const dialogEl = dialog.current;

        if (!dialogEl) return;

        if (open) {
            dialogEl.showModal();
        } else {
            dialogEl.close();
        }

        return () => {
            if (dialogEl) {
                dialogEl.close();
            }
        };
    }, [open]);
    return createPortal ( 
        <dialog ref={dialog} className="modal">
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}

export default Modal