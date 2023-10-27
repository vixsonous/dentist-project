import Menu from "@/app/global-components/Menu";
import Tooth from "./tooth";
import Modal from "@/app/global-components/Modal";
import { ReactElement, useState } from "react";
import DoctorNotes from "@/app/global-components/DoctorNotes";

interface pageProps {
    patient_id: String
}
export default function Odontogram({patient_id} : pageProps) {
    const odntArr = [
        [55,54,53,52,51],[61,62,63,64,65],
        [18,17,16,15,14,13,12,11], [21,22,23,24,25,26,27,28],
        [48,47,46,45,44,43,42,41], [31,32,33,34,35,36,37,38],
        [85,84,83,82,81],[71,72,73,74,75]
    ]

    const [open,setOpen] = useState(false);
    const [children, setChildren] = useState(<h1></h1>);

    const onClose = () => {
        setOpen(false);
    }
    
    return (
        <div className="flex gap-10 justify-center items-center p-2 border-2 border-gray-300">
            <div className="1-grp flex flex-col">
                {
                    [0,2,4,6].map((el) => {
                        return (
                            <div className="1-row flex justify-end">
                                {odntArr[el].map((x) => <Tooth key={x} setOpen={setOpen} patient_id={patient_id} setChildren={setChildren} toothNo={x}/>)}
                            </div>
                        )
                    })
                }
            </div>
            <div className="2-grp flex-col items-center">
                {
                    [1,3,5,7].map((el) => {
                        return (
                            <div className="1-row flex">
                                {odntArr[el].map((x) => <Tooth key={x} setOpen={setOpen} patient_id={patient_id} setChildren={setChildren} toothNo={x}/>)}
                            </div>
                        )
                    })
                }
                
            </div>
            <Modal open={open} onClose={onClose}>
                {children}
            </Modal>
        </div>
    )
}