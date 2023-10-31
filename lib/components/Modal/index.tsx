'use client';
import { useState } from "react";

const Modal: React.FC<any> = () => {
    const [ open , setOpen ] = useState(false)
    return (
        <>
            <button className="btn" onClick={()=>{setOpen(true)}}>open modal</button>
            <dialog  className="modal" open={open}>
              <div className="modal-box">
                
                <div className="flex items-center w-full flex justify-start">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <button className="btn" onClick={()=>{setOpen(false)}}>Close</button>
                </div>

                <p className="py-4">develo</p>
                <div className="modal-action">
                    
                </div>
              </div>
            </dialog>
        </>
    )
}

export default Modal