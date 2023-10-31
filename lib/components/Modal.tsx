'use client'
import { CloseIcon } from "./icons"

interface ModalProps {
    open:boolean;
    onClose:() => any;
    children?:React.ReactNode;
    title?:React.ReactNode;
}

const Modal:React.FC<ModalProps> = ({open,onClose,children,title=''}) => {

    return (
        <dialog id="my_modal_1" className="modal" open={open}>
        <div className="modal-box">
            <div className="flex items-center w-full justify-between mb-3">
                <h3 className="font-bold text-lg">{title}</h3>
                <CloseIcon className="cursor-pointer hover:opacity-60 transition-opacity"
                onClick={onClose}
                />
            </div>
          {children}

        </div>
      </dialog>
    )
}
export default Modal