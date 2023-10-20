import Menu from "@/app/global-components/Menu";
import Tooth from "./tooth";
import Modal from "@/app/global-components/Modal";
import { ReactElement, useState } from "react";

export default function Odontogram() {
    const odntArr = [
        [55,54,53,52,51],[61,62,63,64,65],
        [18,17,16,15,14,13,12,11], [21,22,23,24,25,26,27,28],
        [48,47,46,45,44,43,42,41], [31,32,33,34,35,36,37,38],
        [85,84,83,82,81],[71,72,73,74,75]
    ]

    const [open,setOpen] = useState(true);
    const [children, setChildren] = useState(<h1>XDDXD</h1>);

    const onClose = () => {
        setOpen(false);
    }
    
    return (
        <div className="flex gap-10 justify-center items-center p-2 border-2 border-gray-300">
            <div className="1-grp flex flex-col">
                <div className="1-row flex justify-end">
                    {odntArr[0].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
                <div className="2-row flex justify-end">
                    {odntArr[2].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
                <div className="2-row flex justify-end">
                    {odntArr[4].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
                <div className="2-row flex justify-end">
                    {odntArr[6].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
            </div>
            <div className="2-grp flex-col items-center">
                <div className="1-row flex">
                    {odntArr[1].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
                <div className="1-row flex ">
                    {odntArr[3].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
                <div className="1-row flex ">
                    {odntArr[5].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
                <div className="1-row flex">
                    {odntArr[7].map((x) => <Tooth key={x} setOpen={setOpen} setChildren={setChildren} toothNo={x}/>)}
                </div>
            </div>
            <Modal open={open} onClose={onClose}>
                {children}
            </Modal>
        </div>
    )
}