import { MouseEventHandler, ReactElement } from "react"

type ModalProps = {
    open: boolean,
    onClose: MouseEventHandler<HTMLDivElement>,
    children: ReactElement
}

export default function Modal({open, onClose, children}: ModalProps) {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${ open ? 'visible bg-black/20' : 'invisible'}`}>
            <div className={`bg-white rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                {children}
            </div>
        </div>
    )
}