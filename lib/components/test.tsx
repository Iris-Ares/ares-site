'use client'

import { useState } from "react"
import Modal from "./Modal"
const Test = () => {
    const [open, setOpen] = useState(false)
    return (
       <div>
            <button className="btn" onClick={()=>{setOpen(true)}}>open modal</button>
            <Modal
            open={open}
            onClose={()=>{setOpen(false)}}
            >
                AAA
            </Modal>
       </div>
    )
}
export default Test