import { PrismaClient } from "@prisma/client";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
const prisma = new PrismaClient();

type CardProps = {
    toothNo: number,
    setOpen: Dispatch<SetStateAction<boolean>>,
    setChildren: Dispatch<SetStateAction<JSX.Element>>
}

export default function Tooth({toothNo, setOpen, setChildren} : CardProps) {

    const onClickOdo = async (tooth_no:number, patient_id:number, tooth_position:number) => {
        const notes = await fetch("/api/doctor-notes").then((res) => res.json())
        
        switch(tooth_position){
            case 0: setChildren(<h1>Center</h1>);break;
            case 1: setChildren(<h1>Front</h1>);break;
            case 2: setChildren(<h1>Left</h1>);break;
            case 3: setChildren(<h1>Right</h1>);break;
            case 4: setChildren(<h1>Back</h1>);break;
        }
        setOpen(true);
        console.log(notes)
    }
    
    return (
        <div className="m-2 flex flex-col gap-1" style={{width:'75px'}}>
            <select className="p-1 bg-white opacity-60 bg-transparent border-0 border-b-2 border-gray-500 text-xs" style={{width:'74px'}}>
                <option></option>
                <option>Sample</option>
                <option>Sample</option>
            </select>
            <span className="flex justify-center text-xs">{toothNo}</span>
            <div className="wrapper opacity-30">
                <div className="sector" id="633" onClick={() => onClickOdo(toothNo, 12345, 3)} style={{rotate: '135deg'}} ></div>
                <div className="sector" id="634" onClick={() => onClickOdo(toothNo, 12345, 4)} style={{rotate: '225deg'}} ></div>
                <div className="sector" id="632" onClick={() => onClickOdo(toothNo, 12345, 2)} style={{rotate: '315deg'}} ></div>
                <div className="sector" id="631" onClick={() => onClickOdo(toothNo, 12345, 1)} style={{rotate: '405deg'}}></div>
                <div>
                    <div className="rating" id="630" onClick={() => onClickOdo(toothNo, 12345, 0)}></div>
                </div>
            </div>
        </div>
    );
}